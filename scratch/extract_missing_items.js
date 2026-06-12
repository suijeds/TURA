const fs = require('fs');
const path = require('path');

const { SECTIONS } = require('./temp_sections.js');
const missingKeys = require('./missing_translation_keys.json');

// Extract the English item names from the report
const missingNames = [];
missingKeys.forEach(k => {
  const match = k.match(/ITEM_TRANSLATIONS\["([^"]+)"\]/);
  if (match && !missingNames.includes(match[1])) {
    missingNames.push(match[1]);
  }
});

console.log('Extracting details for:', missingNames);

const extracted = {};

SECTIONS.forEach(section => {
  if (section.groups) {
    section.groups.forEach(group => {
      if (group.items) {
        group.items.forEach(item => {
          if (missingNames.includes(item.en)) {
            extracted[item.en] = {
              ar: item.ar,
              en: item.en,
              descAr: item.descAr,
              descEn: item.descEn,
              tooltipAr: item.tooltipAr,
              tooltipEn: item.tooltipEn
            };
          }
        });
      }
    });
  }
});

fs.writeFileSync(
  path.join(__dirname, 'missing_items_details.json'),
  JSON.stringify(extracted, null, 2)
);
console.log('Saved details to scratch/missing_items_details.json');
