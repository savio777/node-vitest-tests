import { areIntervalsOverlapping } from "date-fns";

import Appointments from "../../entities/appointments";
import { AppointmentRepository } from "../appointments-repositories";

export default class InMemoryAppointmentRepository
  implements AppointmentRepository
{
  public items: Appointments[] = [];

  async create(appointment: Appointments): Promise<void> {
    this.items.push(appointment);
  }

  async findOverlappingAppointment(
    startDate: Date,
    endDate: Date
  ): Promise<Appointments | null> {
    const overlappingAppointment = this.items.find((appointment) => {
      return areIntervalsOverlapping(
        { start: startDate, end: endDate },
        { start: appointment.startsAt, end: appointment.endsAt },
        { inclusive: true }
      );
    });

    if (!overlappingAppointment) {
      return null;
    }

    return overlappingAppointment;
  }
}
