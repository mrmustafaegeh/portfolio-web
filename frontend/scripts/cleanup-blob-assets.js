
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ASSETS_FILE = path.resolve(__dirname, '../src/data/blobAssets.ts');

if (!fs.existsSync(ASSETS_FILE)) {
  console.error(`❌ Error: Asset file not found at ${ASSETS_FILE}`);
  process.exit(1);
}

// Read the current file content
const content = fs.readFileSync(ASSETS_FILE, 'utf-8');

// Extract the object part
const match = content.match(/export const blobAssets: Record<string, string> = ({[\s\S]*?});/);
if (!match) {
  console.error("❌ Could not parse blobAssets object.");
  process.exit(1);
}

const assets = JSON.parse(match[1]);
const filteredAssets = {};

console.log("Cleaning up blobAssets...");

for (const [key, url] of Object.entries(assets)) {
  // Keep only .webp
  if (!key.endsWith('.webp')) continue;

  // Skip -small.webp (we infer these from the main URL in the code)
  if (key.endsWith('-small.webp')) continue;

  filteredAssets[key] = url;
}

const newContent = `// This file is auto-generated and cleaned
// Do not edit manually

export const blobAssets: Record<string, string> = ${JSON.stringify(filteredAssets, null, 2)};
`;

fs.writeFileSync(ASSETS_FILE, newContent);
console.log(`\n🎉 refined blobAssets written to ${ASSETS_FILE}`);
console.log(`Original keys: ${Object.keys(assets).length}`);
console.log(`New keys: ${Object.keys(filteredAssets).length}`);
