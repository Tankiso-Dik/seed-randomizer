const fs = require('fs');
const path = require('path');

const pageFilePath = path.join(__dirname, 'src/app/page.tsx');
let pageContent = fs.readFileSync(pageFilePath, 'utf8');

// For single preview: Add selectedFramework state
pageContent = pageContent.replace(
  '  const [selectedTheme, setSelectedTheme] = useState<string>("none");',
  '  const [selectedTheme, setSelectedTheme] = useState<string>("none");\n  const [selectedFramework, setSelectedFramework] = useState<string>("");'
);

// We need to fetch the mapped theme and framework based on the randomly picked archetype in `handleRandomizeAll` and `handleRandomizeCurrent`.
// Instead of modifying the randomize functions heavily, we can simply pick a random archetype first, then pick theme/framework.
const oldRandomizeAll = `  const handleRandomizeAll = useCallback(() => {
    const randomAnimalKeys = Object.keys(ANIMALS_DATA);
    const randomAnimalId = randomAnimalKeys[Math.floor(Math.random() * randomAnimalKeys.length)];
    const animal = ANIMALS_DATA[randomAnimalId];
    setSelectedAnimalId(randomAnimalId);
    
    // We don't rely on useEffect here to avoid race conditions with setting state immediately
    setSelectedColor(animal.colors[Math.floor(Math.random() * animal.colors.length)]);
    setSelectedAngle(animal.angles[Math.floor(Math.random() * animal.angles.length)]);
    setSelectedAesthetic(animal.aesthetics[Math.floor(Math.random() * animal.aesthetics.length)]);
    setSelectedTheme(THEMES[Math.floor(Math.random() * THEMES.length)].id);
    setSelectedHumor(HUMOR_STYLES[Math.floor(Math.random() * HUMOR_STYLES.length)].id);
    setSelectedComposition(animal.compositions[Math.floor(Math.random() * animal.compositions.length)]);
    setSelectedRenderStyle(RENDER_STYLES[Math.floor(Math.random() * RENDER_STYLES.length)].id);
  }, []);`;

const newRandomizeAll = `  const handleRandomizeAll = useCallback(() => {
    const randomAnimalKeys = Object.keys(ANIMALS_DATA);
    const randomAnimalId = randomAnimalKeys[Math.floor(Math.random() * randomAnimalKeys.length)];
    const animal = ANIMALS_DATA[randomAnimalId];
    setSelectedAnimalId(randomAnimalId);
    
    const randArc = animal.archetypes[Math.floor(Math.random() * animal.archetypes.length)];
    setSelectedColor(animal.colors[Math.floor(Math.random() * animal.colors.length)]);
    setSelectedAngle(animal.angles[Math.floor(Math.random() * animal.angles.length)]);
    setSelectedAesthetic(animal.aesthetics[Math.floor(Math.random() * animal.aesthetics.length)]);
    setSelectedTheme(randArc.themes[Math.floor(Math.random() * randArc.themes.length)]);
    setSelectedFramework(randArc.frameworks[Math.floor(Math.random() * randArc.frameworks.length)]);
    setSelectedHumor(HUMOR_STYLES[Math.floor(Math.random() * HUMOR_STYLES.length)].id);
    setSelectedComposition(animal.compositions[Math.floor(Math.random() * animal.compositions.length)]);
    setSelectedRenderStyle(RENDER_STYLES[Math.floor(Math.random() * RENDER_STYLES.length)].id);
  }, []);`;
pageContent = pageContent.replace(oldRandomizeAll, newRandomizeAll);

const oldRandomizeCurrent = `  const handleRandomizeCurrent = useCallback(() => {
    if (!currentAnimal) return;
    setSelectedColor(currentAnimal.colors[Math.floor(Math.random() * currentAnimal.colors.length)]);
    setSelectedAngle(currentAnimal.angles[Math.floor(Math.random() * currentAnimal.angles.length)]);
    setSelectedAesthetic(currentAnimal.aesthetics[Math.floor(Math.random() * currentAnimal.aesthetics.length)]);
    setSelectedTheme(THEMES[Math.floor(Math.random() * THEMES.length)].id);
    setSelectedHumor(HUMOR_STYLES[Math.floor(Math.random() * HUMOR_STYLES.length)].id);
    setSelectedComposition(currentAnimal.compositions[Math.floor(Math.random() * currentAnimal.compositions.length)]);
    setSelectedRenderStyle(RENDER_STYLES[Math.floor(Math.random() * RENDER_STYLES.length)].id);
  }, [currentAnimal]);`;

const newRandomizeCurrent = `  const handleRandomizeCurrent = useCallback(() => {
    if (!currentAnimal) return;
    const randArc = currentAnimal.archetypes[Math.floor(Math.random() * currentAnimal.archetypes.length)];
    setSelectedColor(currentAnimal.colors[Math.floor(Math.random() * currentAnimal.colors.length)]);
    setSelectedAngle(currentAnimal.angles[Math.floor(Math.random() * currentAnimal.angles.length)]);
    setSelectedAesthetic(currentAnimal.aesthetics[Math.floor(Math.random() * currentAnimal.aesthetics.length)]);
    setSelectedTheme(randArc.themes[Math.floor(Math.random() * randArc.themes.length)]);
    setSelectedFramework(randArc.frameworks[Math.floor(Math.random() * randArc.frameworks.length)]);
    setSelectedHumor(HUMOR_STYLES[Math.floor(Math.random() * HUMOR_STYLES.length)].id);
    setSelectedComposition(currentAnimal.compositions[Math.floor(Math.random() * currentAnimal.compositions.length)]);
    setSelectedRenderStyle(RENDER_STYLES[Math.floor(Math.random() * RENDER_STYLES.length)].id);
  }, [currentAnimal]);`;
pageContent = pageContent.replace(oldRandomizeCurrent, newRandomizeCurrent);

// Update single prompt generation
// Wait, currently line 65 uses: `currentAnimal.archetypes ? currentAnimal.archetypes[Math.floor(Math.random() * currentAnimal.archetypes.length)].arc : ""`
// We need to keep a selectedArchetype state to make sure arc, idty, and framework all match!
const stateVars = `  const [selectedTheme, setSelectedTheme] = useState<string>("none");\n  const [selectedFramework, setSelectedFramework] = useState<string>("");`;
const newStateVars = `  const [selectedTheme, setSelectedTheme] = useState<string>("none");\n  const [selectedFramework, setSelectedFramework] = useState<string>("");\n  const [selectedArchetype, setSelectedArchetype] = useState<any>(null);`;
pageContent = pageContent.replace(stateVars, newStateVars);

pageContent = pageContent.replace(
  'setSelectedAnimalId(newAnimalId);',
  'setSelectedAnimalId(newAnimalId);\n    setSelectedArchetype(ANIMALS_DATA[newAnimalId]?.archetypes[0]);'
);

pageContent = pageContent.replace(
  'setSelectedAnimalId(randomAnimalId);',
  'setSelectedAnimalId(randomAnimalId);\n    setSelectedArchetype(randArc);'
);

pageContent = pageContent.replace(
  'const randArc = currentAnimal.archetypes[Math.floor(Math.random() * currentAnimal.archetypes.length)];',
  'const randArc = currentAnimal.archetypes[Math.floor(Math.random() * currentAnimal.archetypes.length)];\n    setSelectedArchetype(randArc);'
);

// Update the generatedPrompt replacement
pageContent = pageContent.replace(
  /\.replace\("\[ARCHETYPE\]", currentAnimal\?\.archetypes \? currentAnimal\.archetypes\[Math\.floor\(Math\.random\(\) \* currentAnimal\.archetypes\.length\)\].arc : ""\)\s*\n\s*\.replace\("\[BUYER_IDENTITY\]", currentAnimal\?\.archetypes \? currentAnimal\.archetypes\[Math\.floor\(Math\.random\(\) \* currentAnimal\.archetypes\.length\)\].idty : ""\)/g,
  `.replace("[ARCHETYPE]", selectedArchetype?.arc || "")
    .replace("[BUYER_IDENTITY]", selectedArchetype?.idty || "")
    .replace("[FRAMEWORK]", selectedFramework || "")`
);
pageContent = pageContent.replace(
  '.replace("[THEME]", currentTheme?.label || "")',
  '.replace("[THEME]", THEMES.find(t => t.id === selectedTheme)?.label || "")'
);

// Update batch copy replacement
pageContent = pageContent.replace(
  'const randTheme = THEMES[Math.floor(Math.random() * THEMES.length)];',
  'const randTheme = randArc.themes[Math.floor(Math.random() * randArc.themes.length)];\n      const randFramework = randArc.frameworks[Math.floor(Math.random() * randArc.frameworks.length)];'
);

pageContent = pageContent.replace(
  '.replace("[BUYER_IDENTITY]", randArc.idty)',
  '.replace("[BUYER_IDENTITY]", randArc.idty)\n        .replace("[FRAMEWORK]", randFramework)'
);
pageContent = pageContent.replace(
  '.replace("[THEME]", randTheme.label)',
  '.replace("[THEME]", THEMES.find(t => t.id === randTheme)?.label || randTheme)'
);

fs.writeFileSync(pageFilePath, pageContent);
console.log('Successfully updated page.tsx to map themes and frameworks.');
