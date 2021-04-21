import { capitalizeFirstLetter, removeStringFromMarkers } from "./translation";

test("Check if first letter is capitalized", () => {
  const capitalized = capitalizeFirstLetter("kokama KinKin");
  const expected = "Kokama KinKin";

  expect(capitalized).toBe(expected);
});

test("Check if we get the string between the tags", () => {
  const word = removeStringFromMarkers("eu tenho uma >Palavra<", ">", "<");
  const expected = "Palavra";

  expect(word).toBe(expected);
});
