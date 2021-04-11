import { capitalizeFirstLetter } from "./translation";

test("Check if first letter is capitalized", () => {
  const capitalized = capitalizeFirstLetter("kokama KinKin");
  const expected = "Kokama KinKin";

  expect(capitalized).toBe(expected);
});
