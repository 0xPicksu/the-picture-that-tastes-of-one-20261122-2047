import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, "entry.png");
const outDir = process.env.OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png not found next to main.ts");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
const srcBytes = statSync(source).size;
const dstBytes = statSync(target).size;
if (srcBytes !== dstBytes) {
  throw new Error(`size mismatch: source ${srcBytes} bytes, output ${dstBytes} bytes`);
}
console.log(`wrote ${target} (${dstBytes} bytes)`);
