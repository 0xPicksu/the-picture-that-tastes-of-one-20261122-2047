import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const outDir = process.env.OUTPUT_DIR || "/output";
const entryName = "entry.png";

const here = path.dirname(fileURLToPath(import.meta.url));

const candidates = [
  path.join(process.cwd(), entryName),
  path.join(here, entryName),
];

const src = candidates.find((p) => fs.existsSync(p));
if (!src) {
  throw new Error("entry.png not found next to main.ts or in the working directory");
}

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(src, path.join(outDir, entryName));
