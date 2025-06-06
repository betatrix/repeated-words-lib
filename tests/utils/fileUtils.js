import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

export function readFile(fileName) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, "../fixtures", `${fileName}.txt`);
  return fs.readFileSync(filePath, "utf-8");
}

export function removeFile(filePath, nameFileText) {
  const fullPath = path.join(filePath, `${nameFileText}.txt`);
  return fs.unlinkSync(fullPath);
}

export function searchFile(filePath, nameFileText) {
  const fullPath = path.join(filePath, `${nameFileText}.txt`);
  return fs.existsSync(fullPath);
}
