import Button from './components/Button';
import EmployeeList from './components/EmployeeList';
import AddEmployeeForm from './components/AddEmployeeForm';
import AddTaskForm from './components/AddTaskForm';
import { useState } from 'react';

export const initialEmployees = [
  { id: 1, name: "Sarah Smith", position: 'HR manager', image: "https://i.pravatar.cc/48?u=1", task: 'Screen CVs' },
  { id: 2, name: "Clark Rogers", position: 'Business Analyst', image: "https://i.pravatar.cc/48?u=2", task: 'Research market trends' },
  { id: 3, name: "Melanie Johnson", position: 'Customer Support Representative', image: "https://i.pravatar.cc/48?u=3", task: 'Resolve clients tickets' }
]

function App() {

  const [employees, setEmployees] = useState(initialEmployees);

  const [showAddEmployees, setShowAddEmployees] = useState(false);

  const [selectedEmployee, setSelectedEmployee] = useState(null);


  function onAddEmployees(employee) {
    setEmployees(employees => [...employees, employee]);
    setShowAddEmployees(false);
  }

  function handleShowAddEmployees() {
    setShowAddEmployees(showAdd => !showAdd);
  }

  function handleSelectedEmployee(employee) {
    setSelectedEmployee(selectedEmployee => selectedEmployee?.id !== employee.id ? employee : null)
  }
  function handleAssignTask(value) {
    setEmployees(employees => employees.map(employee => employee.id === selectedEmployee?.id ? { ...employee, task: value } : employee))
    setSelectedEmployee(null)
  }
  return (
    <>
      <h1 id='title'>Welcome to Employee Task Manager</h1>
      <div className='app'>
        <div className='sidebar'>
          <EmployeeList onSelectEmployee={handleSelectedEmployee} selectedEmployee={selectedEmployee} employees={employees}></EmployeeList>
          {showAddEmployees && <AddEmployeeForm onAddEmployees={onAddEmployees}></AddEmployeeForm>}
          <Button onClick={handleShowAddEmployees}>{!showAddEmployees ? 'Add New Employee' : 'Close'}</Button>
        </div>
        {selectedEmployee && <AddTaskForm onAddTask={handleAssignTask} selectedEmployee={selectedEmployee}></AddTaskForm>}
      </div>
    </>
  );
}

export default App;
