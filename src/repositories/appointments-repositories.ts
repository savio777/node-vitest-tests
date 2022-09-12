import Appointments from "../entities/appointments";

export interface AppointmentRepository {
  create(appointment: Appointments): Promise<void>;
  findOverlappingAppointment(
    startDate: Date,
    endDate: Date
  ): Promise<Appointments | null>;
}
