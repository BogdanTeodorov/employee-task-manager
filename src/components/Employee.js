import Button from './Button'
export default function Employee({ employee, onSelectEmployee, selectedEmployee }) {

    return <li>
        <img src={employee.image} alt={employee.name}></img>
        <h3>Name: {employee.name}</h3>
        <h5>Position: {employee.position}</h5>
        <p>Task: {!employee.task ? 'Currently no task' : employee.task}</p>
        <Button onClick={() => onSelectEmployee(employee)}>{selectedEmployee?.id === employee.id ? 'Close' : 'Select'}</Button>
    </li>

}