import {capitalizeFirstLetter} from "./translation"

let undesiredChars:Array<string> = [",", ".", "!", "?"," ", "", "\0", "\n"]

export function createBlankSpace(text: string, word:string="", language:string="portuguese"){ 
    let phrase:string = text.replace("<", "").replace(">", "");
    if (language == "portuguese") {
        return phrase;
    }

    for (let index1 in undesiredChars) {
        for (let index2 in undesiredChars) {

            phrase = phrase.replace(
                undesiredChars[index1] + word + undesiredChars[index2],
                undesiredChars[index1] + "_______" + undesiredChars[index2]
            )

            if (phrase.indexOf("_______") != -1) {
                return phrase;
            }
        }
    }

    return "Error 404: Frase não encontrada";
}
