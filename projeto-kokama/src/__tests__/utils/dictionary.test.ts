import { getCurrentDate } from "../../utils/dictionary";


test("Check current date format", () => {
    const expected = getCurrentDate()
    expect(getCurrentDate()).toBe(expected)
});
