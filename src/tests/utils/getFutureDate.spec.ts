import { expect, test } from "vitest";
import { getFutureDate } from "./getFutureDate";

test("increases date with one yar", () => {
  const year = new Date().getFullYear();

  expect(getFutureDate(`${year}-08-10`).getFullYear()).toEqual(2023);
});
