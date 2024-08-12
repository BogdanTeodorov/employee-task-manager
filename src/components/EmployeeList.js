import Employee from './Employee';
export default function EmployeeList({ employees, onSelectEmployee, selectedEmployee }) {
    return <ul>
        {employees.map(employee => <Employee selectedEmployee={selectedEmployee} onSelectEmployee={onSelectEmployee} employee={employee} key={employee.id}></Employee>)}
    </ul>
}