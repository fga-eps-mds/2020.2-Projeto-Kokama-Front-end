import {removeStringFromMarkers} from "./translation"

// let remove_chars: Array<string> = ([',', '.', '<' ,'>'])

export function createBlankSpace(text: string, word:string="", language:string="portugues"){
            
    let phrase:string =  text.replace("<", "").replace(">", "");
    if (language == "kokama") {
        phrase = phrase.replace(word, " _______ ");
    }
    return phrase
}