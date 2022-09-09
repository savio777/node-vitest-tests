export interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

class Appointments {
  private props: AppointmentProps;

  constructor(props: AppointmentProps) {
    const { startsAt, endsAt } = props;

    if (endsAt <= startsAt) {
      throw new Error("Invalid end date");
    }

    this.props = props;
  }

  get customer() {
    return this.props.customer;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }
}

export default Appointments;
