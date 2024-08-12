import { useState } from "react";
import Button from "./Button"
export default function AddEmployeeForm({ onAddEmployees }) {
    const [employeeName, setEmployeeName] = useState('');
    const [employeePicture, setEmployeePicture] = useState("https://i.pravatar.cc/48");
    const [position, setPosition] = useState('');
    const [employeeFormErrors, setEmployeeFormErrors] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setEmployeeFormErrors('');
        if (!employeeName || !position) {
            setEmployeeFormErrors('Employee name and Position are required fields');
            return;
        }
        const id = crypto.randomUUID();
        const newEmployee = {
            id,
            name: employeeName,
            position,
            image: `${employeePicture}?=${id}`,
            task: '',
        }
        onAddEmployees(newEmployee);
        setEmployeeName("");
        setEmployeePicture('https://i.pravatar.cc/48');
        setPosition('');
    }
    return <div>
        <form className="form-add-employee" onSubmit={handleSubmit}>
            <label>🆔Full Name</label>
            <input value={employeeName} onChange={e => setEmployeeName(e.target.value)} type="text" placeholder="Enter Employee Full Name"></input>
            <label>🖼Profile Picture</label>
            <input value={employeePicture} onChange={e => setEmployeePicture(e.target.value)} type="text"></input>
            <label>👨‍💼Position</label>
            <select onChange={e => setPosition(e.target.value)} value={position}>
                <option value='' disabled hidden>
                    Select a position
                </option>
                <option value='HR Recruiter'>HR Recruiter</option>
                <option value='Sales Manager'>Sales Manager</option>
                <option value='Business Analyst'>Business Analyst</option>
                <option value='SMM Worker'>SMM Worker</option>
                <option value='System Administrator'>System Administrator</option>
            </select>
            <Button>Add Employee</Button>
        </form>
        <div>
            {employeeFormErrors && <h3 className="red">{employeeFormErrors}</h3>}
        </div>
    </div>
}