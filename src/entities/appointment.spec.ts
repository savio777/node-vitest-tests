import { expect, test } from "vitest";
import { getFutureDate } from "../tests/utils/getFutureDate";

import Appointments from "./appointments";

test("create an appointment", () => {
  const startDate = getFutureDate("2022-08-10");
  const endDate = getFutureDate("2022-08-12");

  const appointment = new Appointments({
    customer: "Savio",
    startsAt: startDate,
    endsAt: endDate,
  });

  expect(appointment).toBeInstanceOf(Appointments);
  expect(appointment.customer).toEqual("Savio");
});

test("cannot create an appointment with end date before start date", () => {
  const startDate = getFutureDate("2022-08-10");
  const endDate = getFutureDate("2022-08-08");

  expect(() => {
    return new Appointments({
      customer: "Savio",
      startsAt: startDate,
      endsAt: endDate,
    });
  }).toThrow();
});

test("cannot create an appointment with start date before now", () => {
  const startDate = new Date();
  const endDate = new Date();

  startDate.setDate(startDate.getDate() - 1);
  endDate.setDate(endDate.getDate() + 3);

  expect(() => {
    return new Appointments({
      customer: "Savio",
      startsAt: startDate,
      endsAt: endDate,
    });
  }).toThrow();
});
