import { access, readFile } from 'node:fs/promises';

for (const file of ['index.html', 'src/styles.css', 'src/main.js']) {
  await access(file);
  const content = await readFile(file, 'utf8');
  if (!content.trim()) throw new Error(`${file} is empty`);
}
console.log('Static product page assets verified.');
