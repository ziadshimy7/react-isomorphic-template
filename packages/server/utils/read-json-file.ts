import path from "path";
import fs from "fs";

export const readFile = (...pathSegments: string[]): string =>
  fs.readFileSync(path.join(process.cwd(), ...pathSegments), "utf-8");

export const readJsonFile = <Data>(path: string, defaultValue: Data): Data => {
  try {
    return JSON.parse(readFile(path));
  } catch {
    return defaultValue;
  }
};
