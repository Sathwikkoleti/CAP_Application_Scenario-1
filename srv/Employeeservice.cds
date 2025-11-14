using { ust.Sathwik.Koleti.db as db } from '../db/EmployeeSchema';

service EmployeeService {

    entity employee as projection on db.employee;

}