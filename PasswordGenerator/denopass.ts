// @ts-ignore
import { readJson } from "https://deno.land/x/jsonfile/mod.ts";
import chalk from "npm:chalk@5";

export async function createPassword(): Promise<string> {
  const words = await readJson("./words.json");
  const symbol = await readJson("./symbols.json");

  const randomWords = getRandomWords(words, 3, symbol);

  return randomWords.join("");
}

function getRandomWords(
  words: { word: string }[],
  numWords: number,
  symbol: { symbol: string }[],
): string[] {
  const selectedWords: string[] = [];
  for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomSymbol = Math.floor(Math.random() * symbol.length);
    selectedWords.push(words[randomIndex].word);
    selectedWords.push(symbol[randomSymbol].symbol);
  }
  return selectedWords;
}

createPassword().then((password) => {
  console.log("Generated password: ", chalk.green(password));
});
