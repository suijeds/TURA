const fs = require('fs');
const path = require('path');

// Read files as text to avoid ESM import issues in standard Node
const sectionsText = fs.readFileSync(path.join(__dirname, 'src/data/sections.ts'), 'utf-8');
const translationsText = fs.readFileSync(path.join(__dirname, 'src/data/translations.ts'), 'utf-8');

// Simple regex extraction of English names from sections.ts
const itemEnRegex = /en:\s*'([^']+)'/g;
const itemsInSections = [];
let match;
while ((match = itemEnRegex.exec(sectionsText)) !== null) {
  if (!itemsInSections.includes(match[1]) && match[1] !== 'Lighting' && match[1] !== 'Camera' && match[1] !== 'Lens & Optics') {
    itemsInSections.push(match[1]);
  }
}

console.log(`Found ${itemsInSections.length} unique items in sections.ts`);

// Check which of these are missing in translationsText
const missingItems = [];
for (const item of itemsInSections) {
  if (!translationsText.includes(`'${item}':`) && !translationsText.includes(`"${item}":`)) {
    missingItems.push(item);
  }
}

console.log('Missing items in translations.ts:', missingItems);
