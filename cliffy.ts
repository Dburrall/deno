// @ts-ignore
import { add } from "https://deno.land/x/fonction/mod.ts";
// @ts-ignore
import { multiply } from "https://deno.land/x/fonction/mod.ts";
// @ts-ignore
import { Ask, Separator } from "@sallai/ask";

const ask = new Ask();

const answers = await ask.prompt([
  {
    name: "name",
    type: "input",
    message: "Name:",
  },
  {
    name: "age",
    type: "number",
    message: "Age:",
  },
]);

const { toppings } = await ask.checkbox(
  {
    name: "toppings",
    message: "Select pizza toppings:",
    choices: [
      { message: "Pepperoni", value: "pepperoni" },
      { message: "Mushrooms", value: "mushrooms" },
      new Separator(),
      { message: "Pineapple", value: "pineapple" },
    ],
  } as const,
);

const { password } = await ask.password(
  {
    name: "password",
    message: "Enter your password:",
    mask: "*",
  } as const,
);

const { canDrive } = await ask.confirm(
  {
    name: "canDrive",
    message: "Can you drive?",
  } as const,
);

console.log(canDrive);
console.log(toppings);
console.log(answers);
console.log(password);

console.log(add(2, 3));
console.log(multiply(3, 9));
