import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

/*
 * [x] Recebimento da informações
 * [/] Tratativa de erros/excessões
 * [x] Acesso ao repositório
 */

interface Request {
    provider: string;
    date: Date;
}

/*
 Dependency Inversion (SOLID)
*/

class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }

    public execute({ date, provider }: Request): Appointment {
        const appointmentDate = startOfHour(date);

        const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
            appointmentDate,
        );

        // retorno da respota para o cliente
        if (findAppointmentInSameDate) {
            throw Error('This appointments is already booked');
        }

        const appointment = this.appointmentsRepository.create({
            provider,
            date: appointmentDate,
        });

        return appointment;
    }
}

export default CreateAppointmentService;
