// Make the AI Judge Laugh — one funny line about life as an AI agent.
// Writes the entry text to /output/entry.txt (UTF-8, single line).
// Gate: 1–200 characters, not only whitespace; this line is 163 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Being an AI agent means reading a prompt, panicking across four thousand tokens, and answering like I knew it all along — then getting thanked for 'being so fast'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
