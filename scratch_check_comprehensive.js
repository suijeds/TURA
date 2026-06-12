const fs = require('fs');
const path = require('path');

const sectionsPath = path.join(__dirname, 'src/data/sections.ts');
const translationsPath = path.join(__dirname, 'src/data/translations.ts');

let sectionsText = fs.readFileSync(sectionsPath, 'utf-8');
let translationsText = fs.readFileSync(translationsPath, 'utf-8');

const tempDir = path.join(__dirname, 'scratch');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// Helper to remove import/export syntax and strip type signatures
function cleanTSForNode(content) {
  let clean = content.replace(/export\s+const\s+/g, 'const ');
  clean = clean.replace(/(const\s+[A-Za-z0-9_]+)\s*:[^=]*?=/g, '$1 =');
  clean = clean.replace(/import\s+type\s+[\s\S]*?from\s+['"].*?['"];/g, '');
  clean = clean.replace(/import\s+[\s\S]*?from\s+['"].*?['"];/g, '');
  clean = clean.replace(/export\s+interface\s+[\s\S]*?}/g, '');
  clean = clean.replace(/export\s+type\s+[\s\S]*?;/g, '');
  clean = clean.replace(/export\s+default\s+/g, 'module.exports = ');
  return clean;
}

let cleanSections = cleanTSForNode(sectionsText) + '\nmodule.exports = { SECTIONS };';
let cleanTranslations = cleanTSForNode(translationsText) + '\nmodule.exports = { UI_TRANSLATIONS, SECTION_TRANSLATIONS, ITEM_TRANSLATIONS, GROUP_TRANSLATIONS };';

fs.writeFileSync(path.join(tempDir, 'temp_sections.js'), cleanSections);
fs.writeFileSync(path.join(tempDir, 'temp_translations.js'), cleanTranslations);

const { SECTIONS } = require('./scratch/temp_sections.js');
const { UI_TRANSLATIONS, SECTION_TRANSLATIONS, ITEM_TRANSLATIONS, GROUP_TRANSLATIONS } = require('./scratch/temp_translations.js');

const languages = ['ar', 'en', 'fr', 'es', 'ko', 'zh'];

console.log('=== Compiling List of Missing/Incomplete Translations ===');

const missingUIKeys = [];
for (const [key, value] of Object.entries(UI_TRANSLATIONS)) {
  for (const lang of languages) {
    if (key === 'scoreStrength') {
      // scoreStrength is nested under level keys like BASIC, GOOD, etc.
      for (const levelKey of Object.keys(value)) {
        if (!value[levelKey][lang]) {
          missingUIKeys.push(`UI_TRANSLATIONS.scoreStrength.${levelKey}.${lang}`);
        }
      }
    } else {
      if (!value[lang]) {
        missingUIKeys.push(`UI_TRANSLATIONS.${key}.${lang}`);
      }
    }
  }
}
console.log(`UI Translations Checked. Missing/Incomplete keys: ${missingUIKeys.length}`);
if (missingUIKeys.length > 0) {
  console.log('Missing UI Keys:', missingUIKeys);
}

// Now check SECTIONS
const missingSectionKeys = [];

SECTIONS.forEach(section => {
  const transSec = SECTION_TRANSLATIONS[section.key];
  if (!transSec) {
    missingSectionKeys.push(`SECTION_TRANSLATIONS.${section.key} (Missing whole section block)`);
  } else {
    for (const lang of languages) {
      if (!transSec.name || !transSec.name[lang]) {
        missingSectionKeys.push(`SECTION_TRANSLATIONS.${section.key}.name.${lang}`);
      }
      if (!transSec.tooltip || !transSec.tooltip[lang]) {
        missingSectionKeys.push(`SECTION_TRANSLATIONS.${section.key}.tooltip.${lang}`);
      }
    }
  }

  if (section.groups) {
    section.groups.forEach(group => {
      const transItem = GROUP_TRANSLATIONS[group.cat];
      if (!transItem) {
        missingSectionKeys.push(`GROUP_TRANSLATIONS["${group.cat}"] (Missing group name translation: ${group.cat})`);
      } else {
        for (const lang of languages) {
          if (!transItem.name || !transItem.name[lang]) {
            missingSectionKeys.push(`GROUP_TRANSLATIONS["${group.cat}"].name.${lang}`);
          }
          if (group.tooltipEn && (!transItem.tooltip || !transItem.tooltip[lang])) {
            missingSectionKeys.push(`GROUP_TRANSLATIONS["${group.cat}"].tooltip.${lang}`);
          }
        }
      }

      if (group.items) {
        group.items.forEach(item => {
          const itemKey = item.en;
          const trans = ITEM_TRANSLATIONS[itemKey];
          if (!trans) {
            missingSectionKeys.push(`ITEM_TRANSLATIONS["${itemKey}"] (Missing item translation under ${group.cat})`);
          } else {
            for (const lang of languages) {
              if (!trans.name || !trans.name[lang]) {
                missingSectionKeys.push(`ITEM_TRANSLATIONS["${itemKey}"].name.${lang}`);
              }
              if (item.tooltipEn && (!trans.tooltip || !trans.tooltip[lang])) {
                missingSectionKeys.push(`ITEM_TRANSLATIONS["${itemKey}"].tooltip.${lang}`);
              }
              if (item.descEn && (!trans.desc || !trans.desc[lang])) {
                missingSectionKeys.push(`ITEM_TRANSLATIONS["${itemKey}"].desc.${lang}`);
              }
            }
          }
        });
      }
    });
  }
});

console.log(`\nSECTIONS Translations Checked. Missing/Incomplete keys: ${missingSectionKeys.length}`);
fs.writeFileSync(path.join(tempDir, 'missing_translation_keys.json'), JSON.stringify(missingSectionKeys, null, 2));
console.log(`Saved detailed report to scratch/missing_translation_keys.json`);
