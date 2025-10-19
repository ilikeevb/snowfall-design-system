import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, '../../stencil-library/www/build/icons');
const targetDir = path.resolve(__dirname, '../public/icons');

async function ensureDirectory(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function copyIcons() {
  if (!existsSync(sourceDir)) {
    console.warn(`Snowfall icons source directory not found: ${sourceDir}`);
    return;
  }

  await ensureDirectory(targetDir);

  const entries = await fs.readdir(sourceDir, { withFileTypes: true });
  const iconFiles = entries.filter((entry) => entry.isFile());

  await Promise.all(
    iconFiles.map((entry) =>
      fs.copyFile(path.join(sourceDir, entry.name), path.join(targetDir, entry.name))
    )
  );

  const existingTargets = await fs.readdir(targetDir);
  const validNames = new Set(iconFiles.map((entry) => entry.name));

  await Promise.all(
    existingTargets
      .filter((name) => !validNames.has(name))
      .map((name) => fs.rm(path.join(targetDir, name)))
  );

  console.log(`Copied ${iconFiles.length} Snowfall icon(s) to ${targetDir}`);
}

copyIcons().catch((error) => {
  console.error('Failed to synchronize Snowfall icons:', error);
  process.exitCode = 1;
});