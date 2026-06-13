const duckdb = require('duckdb');
const fs = require('fs');
const path = require('path');

const storageDir = path.join(__dirname, '..', '..', 'storage');
if (!fs.existsSync(storageDir)) {
    fs.mkdirSync(storageDir, { recursive: true });
}

const dbPath = path.join(storageDir, 'seed_ledger.duckdb');
const db = new duckdb.Database(dbPath);
const con = db.connect();

function run(sql, ...params) {
    return new Promise((resolve, reject) => {
        con.run(sql, ...params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

function all(sql, ...params) {
    return new Promise((resolve, reject) => {
        con.all(sql, ...params, function (err, res) {
            if (err) reject(err);
            else resolve(res);
        });
    });
}

async function initDb() {
    await run(`
        CREATE SEQUENCE IF NOT EXISTS seq_seed_runs;
        CREATE TABLE IF NOT EXISTS seed_runs (
            id INTEGER DEFAULT nextval('seq_seed_runs') PRIMARY KEY,
            animal VARCHAR,
            direction VARCHAR,
            viability_score FLOAT,
            format VARCHAR,
            run_date DATE
        );
    `);

    await run(`
        CREATE TABLE IF NOT EXISTS discovered_directions (
            animal VARCHAR,
            direction VARCHAR,
            market_signal_score FLOAT,
            discovered_date DATE,
            PRIMARY KEY (animal, direction)
        );
    `);

    await run(`
        CREATE TABLE IF NOT EXISTS ip_blacklist (
            phrase VARCHAR PRIMARY KEY,
            reason VARCHAR,
            flagged_date DATE
        );
    `);

    await run(`
        CREATE TABLE IF NOT EXISTS probe_cache (
            keyword VARCHAR,
            source VARCHAR,
            payload_json TEXT,
            fetched_at TIMESTAMP,
            PRIMARY KEY (keyword, source)
        );
    `);

    // Prune discovered_directions
    await run(`
        DELETE FROM discovered_directions 
        WHERE discovered_date < current_date - INTERVAL 90 DAY
        OR market_signal_score < 70.0;
    `);

    // Prune probe_cache (older than 7 days)
    await run(`
        DELETE FROM probe_cache
        WHERE fetched_at < current_timestamp - INTERVAL 7 DAY;
    `);
}

initDb().catch(console.error);

async function getCached(keyword, source) {
    const rows = await all('SELECT payload_json FROM probe_cache WHERE keyword = ? AND source = ?', keyword, source);
    if (rows && rows.length > 0) {
        return JSON.parse(rows[0].payload_json);
    }
    return null;
}

async function setCache(keyword, source, payload) {
    const payloadStr = JSON.stringify(payload);
    await run(`
        INSERT INTO probe_cache (keyword, source, payload_json, fetched_at)
        VALUES (?, ?, ?, current_timestamp)
        ON CONFLICT (keyword, source) DO UPDATE SET
            payload_json = EXCLUDED.payload_json,
            fetched_at = EXCLUDED.fetched_at;
    `, keyword, source, payloadStr);
}

module.exports = {
    db,
    con,
    run,
    all,
    getCached,
    setCache
};
