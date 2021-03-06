export interface Phrase {
    phrase_portuguese: string;
    phrase_kokama: string;
}

export interface Dictionary {
    word_kokama: string;
    pronunciation_type: string;
    phrases: Phrase[];
    translations: string[];
}

export interface HistoryTuple {
    kokama: string;
    portuguese: string;
}