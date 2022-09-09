import { expect, test } from "vitest";

import Appointments from "./appointments";

test("create an appointment", () => {
  const startDate = new Date();
  const endDate = new Date();

  endDate.setDate(endDate.getDate() + 1);

  const appointment = new Appointments({
    customer: "Savio",
    startsAt: startDate,
    endsAt: endDate,
  });

  expect(appointment).toBeInstanceOf(Appointments);
  expect(appointment.customer).toEqual("Savio");
});

test("cannot create an appointment with end date before start date", () => {
  const startDate = new Date();
  const endDate = new Date();

  endDate.setDate(endDate.getDate() - 1);

  expect(() => {
    return new Appointments({
      customer: "Savio",
      startsAt: startDate,
      endsAt: endDate,
    });
  }).toThrow();
});
