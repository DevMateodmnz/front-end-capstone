import { initializeTimes, updateTimes } from "./bookingUtils";

test("initializeTimes returns the correct array of times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test("updateTimes returns the same array of times regardless of action", () => {
  const state = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES", date: "2025-06-15" };
  const result = updateTimes(state, action);
  expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});
