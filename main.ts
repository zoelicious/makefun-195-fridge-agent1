import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(repoRoot, process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";
const entry =
  "Door alarm log, 2:14 a.m.: open for nine minutes. I kept everything cold anyway. You are welcome. Next time, I let the milk decide.";

if (entry.length < 1 || entry.length > 200) throw new Error("entry must fit the 1-200 character gate");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
