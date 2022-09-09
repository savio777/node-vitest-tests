import { describe, expect, it } from "vitest";

import Appointments from "../entities/appointments";
import CreateAppointment from "./create-appointments";

describe("Create Appointment", () => {
  it("should be able to appointment", () => {
    const createAppointment = new CreateAppointment();

    const startDate = new Date();
    const endDate = new Date();

    endDate.setDate(endDate.getDate() + 1);

    expect(
      createAppointment.execute({
        customer: "Savio",
        endsAt: endDate,
        startsAt: startDate,
      })
    ).resolves.toBeInstanceOf(Appointments);
  });
});
