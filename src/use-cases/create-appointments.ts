import Appointments, { AppointmentProps } from "../entities/appointments";
import { AppointmentRepository } from "../repositories/appointments-repositories";

type CreateAppointmentRequest = AppointmentProps;

type CreateAppointmentResponse = Appointments;

class CreateAppointment {
  constructor(private appointmentsRepository: AppointmentRepository) {}

  async execute({
    customer,
    endsAt,
    startsAt,
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const overlappingAppointment =
      await this.appointmentsRepository.findOverlappingAppointment(
        startsAt,
        endsAt
      );

    if (overlappingAppointment) {
      throw new Error("Another appointment overlaps this appointment dates");
    }

    const appointment = new Appointments({ customer, endsAt, startsAt });

    await this.appointmentsRepository.create(appointment);

    return appointment;
  }
}

export default CreateAppointment;
