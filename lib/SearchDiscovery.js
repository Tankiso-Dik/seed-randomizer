'use strict';

class SearchDiscovery {
  /**
   * Parse raw Exa search results to extract snippets and titles.
   */
  static parseExa(data) {
    if (!data) return { snippets: [], titles: [] };
    const results = data.results || (Array.isArray(data) ? data : []);
    const snippets = [];
    const titles = [];
    
    for (const r of results) {
      if (r) {
        if (r.text) snippets.push(r.text);
        else if (r.snippet) snippets.push(r.snippet);
        if (r.title) titles.push(r.title);
      }
    }
    return { snippets, titles };
  }

  /**
   * Parse raw Serper search results to extract snippets, titles, prices, and reviews.
   */
  static parseSerper(data) {
    if (!data) return { snippets: [], titles: [], priceSignals: [], reviewSignals: [] };
    const organic = data.organic || data.organicResults || (Array.isArray(data) ? data : []);
    const snippets = [];
    const titles = [];
    const priceSignals = [];
    const reviewSignals = [];

    for (const r of organic) {
      if (r) {
        if (r.snippet) {
          snippets.push(r.snippet);
          // Look for prices (e.g., $15.99)
          const priceMatch = r.snippet.match(/\$\d+(?:\.\d{2})?/);
          if (priceMatch) {
            priceSignals.push(parseFloat(priceMatch[0].replace('$', '')));
          }

          // Look for reviews (e.g., "124 reviews")
          const reviewMatch = r.snippet.match(/(\d+(?:\.\d+)?k?)\s*reviews?/i);
          if (reviewMatch) {
            reviewSignals.push(reviewMatch[1]);
          }
        }
        if (r.title) titles.push(r.title);
      }
    }

    return { snippets, titles, priceSignals, reviewSignals };
  }

  /**
   * Parse raw Tavily search results to extract snippets and titles.
   */
  static parseTavily(data) {
    if (!data) return { snippets: [], titles: [] };
    const results = data.results || (Array.isArray(data) ? data : []);
    const snippets = [];
    const titles = [];

    for (const r of results) {
      if (r) {
        if (r.content) snippets.push(r.content);
        else if (r.snippet) snippets.push(r.snippet);
        if (r.title) titles.push(r.title);
      }
    }
    return { snippets, titles };
  }

  /**
   * Extracts clean terms (1 to 3 words) from texts, excluding standard stop words.
   */
  static extractKeywords(texts, stopWords = new Set()) {
    const counts = {};
    const defaultStopWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 'in', 'on', 'at', 'to',
      'for', 'with', 'by', 'of', 'about', 'as', 'this', 'that', 'these', 'those', 'it', 'its',
      'they', 'them', 'their', 'we', 'us', 'our', 'you', 'your', 'i', 'me', 'my', 'he', 'him',
      'his', 'she', 'her', 't-shirt', 'shirt', 'shirts', 'tshirt', 'tshirts', 'sticker', 'stickers',
      'funny', 'cute', 'vintage', 'apparel', 'clothing', 'design', 'graphic', 'teepublic', 'redbubble',
      'etsy', 'amazon'
    ]);

    for (const w of stopWords) {
      defaultStopWords.add(w.toLowerCase());
    }

    for (const text of texts) {
      if (!text) continue;
      const clean = text.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, ' ');
      
      const words = clean.split(' ').filter(w => w && !defaultStopWords.has(w));
      
      for (let i = 0; i < words.length; i++) {
        // 1-gram
        const g1 = words[i];
        if (g1.length > 2) {
          counts[g1] = (counts[g1] || 0) + 1;
        }

        // 2-gram
        if (i < words.length - 1) {
          const g2 = `${words[i]} ${words[i+1]}`;
          counts[g2] = (counts[g2] || 0) + 1;
        }

        // 3-gram
        if (i < words.length - 2) {
          const g3 = `${words[i]} ${words[i+1]} ${words[i+2]}`;
          counts[g3] = (counts[g3] || 0) + 1;
        }
      }
    }

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(entry => ({ term: entry[0], count: entry[1] }));
  }
}

module.exports = SearchDiscovery;
