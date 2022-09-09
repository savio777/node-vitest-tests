import Appointments, { AppointmentProps } from "../entities/appointments";

type CreateAppointmentRequest = AppointmentProps;

type CreateAppointmentResponse = Appointments;

class CreateAppointment {
  async execute({
    customer,
    endsAt,
    startsAt,
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const appointment = new Appointments({ customer, endsAt, startsAt });

    return appointment;
  }
}

export default CreateAppointment;
