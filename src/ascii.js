import figlet from "figlet";
import ansiColors from "ansi-colors";

export async function doStuff() {
  const text = await figlet.text("Turbo CLI");
  console.log(ansiColors.cyan(text));
}
