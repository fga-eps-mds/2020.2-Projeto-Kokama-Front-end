import { act } from "react-test-renderer";
import { capitalizeFirstLetter, removeStringFromMarkers } from "./translation";

function sleep(ms:number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

test("Check if first letter is capitalized", async() => {
  const capitalized = capitalizeFirstLetter("kokama kin kin");
  const expected = "Kokama kin kin";

  await act(()=> sleep(800) as unknown as void);
  expect(capitalized).toBe(expected);
});

test("Check if we get the string between the tags", async() => {
  const word = removeStringFromMarkers("eu tenho uma <Palavra>", "<", ">");
  const expected = "Palavra";

  await act(()=> sleep(800) as unknown as void);
  expect(word).toBe(expected);
});

