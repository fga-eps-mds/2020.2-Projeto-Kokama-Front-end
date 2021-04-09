export function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function removeStringFromMarkers(text: string, begin: string, end: string) {
    let indexBegin: number = text.indexOf(begin) + 1;
    let indexEnd: number = text.indexOf(end);
    return text.slice(indexBegin, indexEnd);
}