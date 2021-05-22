import { PORTUGUESE } from "../config/constants";

const undesiredChars: Array<string> = [",", ".", "!", "?", " ", "", "\0", "\n"];

export function createBlankSpace(
  text: string,
  word: string = "",
  language: string = PORTUGUESE
) {
  let phrase: string = text.replace("<", "").replace(">", "");
  if (language == PORTUGUESE) {
    return phrase;
  }

  for (let index1 in undesiredChars) {
    for (let index2 in undesiredChars) {
      phrase = phrase.replace(
        undesiredChars[index1] + word + undesiredChars[index2],
        undesiredChars[index1] + "_______" + undesiredChars[index2]
      );

      if (phrase.indexOf("_______") != -1) {
        return phrase;
      }
    }
  }

  return "Error 404: Frase não encontrada";
}

export function removeMarkers(text: string) {
  return text.replace('<', '').replace('>', '');
}
