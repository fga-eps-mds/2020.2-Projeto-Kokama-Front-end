import { capitalizeFirstLetter, removeStringFromMarkers } from "../../utils/translation";

test("Check if first letter is capitalized", () => {
  const capitalized = capitalizeFirstLetter("kokama KinKin");
  const expected = "Kokama KinKin";

  expect(capitalized).toBe(expected);
});

test("Check if markers where removed", () => {
  const result = removeStringFromMarkers("testando <123>", "<", ">");
  const expected = "123";

  expect(result).toBe(expected);
});
