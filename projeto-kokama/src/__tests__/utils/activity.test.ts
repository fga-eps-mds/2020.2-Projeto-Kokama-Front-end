import { KOKAMA, PORTUGUESE } from "../../config/constants";
import { removeMarkers, createBlankSpace } from "../../utils/activity";

test("Check if markers where removed", () => {
    const result = removeMarkers("testando <123>");
    const expected = "testando 123";

    expect(result).toBe(expected);
});

test("Check if word was replaced by blank space", () => {
    let result = createBlankSpace("testando <123>", "123", PORTUGUESE);
    let expected = "testando 123";
    expect(result).toBe(expected);

    result = createBlankSpace("testando <123>", "123", KOKAMA);
    expected = "testando _______";
    expect(result).toBe(expected);

    result = createBlankSpace("testando <123>", "456", KOKAMA);
    expected = "Error 404: Frase não encontrada";
    expect(result).toBe(expected);
});