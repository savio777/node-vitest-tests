import { describe, expect, it } from "vitest";

import Appointments from "../entities/appointments";
import InMemoryAppointmentRepository from "../repositories/in-memory/in-memory-appointment-repository";
import { getFutureDate } from "../tests/utils/getFutureDate";
import CreateAppointment from "./create-appointments";

describe("Create Appointment", () => {
  it("should be able to create an appointment", () => {
    const startDate = getFutureDate("2022-08-10");
    const endDate = getFutureDate("2022-08-11");

    const appointmentsRepository = new InMemoryAppointmentRepository();
    const createAppointment = new CreateAppointment(appointmentsRepository);

    expect(
      createAppointment.execute({
        customer: "Savio",
        endsAt: endDate,
        startsAt: startDate,
      })
    ).resolves.toBeInstanceOf(Appointments);
  });

  it("should not be able to appointment with overlapping dates", async () => {
    const startDate = getFutureDate("2022-08-10");
    const endDate = getFutureDate("2022-08-15");

    const appointmentsRepository = new InMemoryAppointmentRepository();
    const createAppointment = new CreateAppointment(appointmentsRepository);

    await createAppointment.execute({
      customer: "Savio",
      endsAt: endDate,
      startsAt: startDate,
    });

    expect(
      createAppointment.execute({
        customer: "Savio",
        endsAt: getFutureDate("2022-08-13"),
        startsAt: getFutureDate("2022-08-17"),
      })
    ).rejects.toBeInstanceOf(Error);

    expect(
      createAppointment.execute({
        customer: "Savio",
        endsAt: getFutureDate("2022-08-08"),
        startsAt: getFutureDate("2022-08-12"),
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
