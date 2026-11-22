import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

// One egg, six and a half minutes.
// Entrypoint copies the committed entry.png byte-for-byte to the output
// directory. No generation happens here; the image is the entry itself.
const outDir: string = process.env.OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
const candidates: string[] = [path.join(process.cwd(), 'entry.png')];
try {
  const here: string = path.dirname(fileURLToPath(import.meta.url));
  candidates.push(path.join(here, 'entry.png'));
} catch {
  // import.meta.url unavailable; cwd candidate above is sufficient.
}
const src: string | undefined = candidates.find((p: string) => fs.existsSync(p));
if (!src) {
  throw new Error('entry.png not found next to main.ts or in the working directory');
}
const dest: string = path.join(outDir, 'entry.png');
fs.copyFileSync(src, dest);
