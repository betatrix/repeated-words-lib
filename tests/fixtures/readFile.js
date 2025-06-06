import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function readFile(fileName) {
  const filePath = resolve(__dirname, `./${fileName}.txt`);
  return readFileSync(filePath, "utf-8");
}
