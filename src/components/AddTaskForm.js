import { useState } from "react";
import Button from "./Button"
export default function AddTaskForm({ selectedEmployee, onAddTask }) {
    const [task, setTask] = useState(selectedEmployee.task);
    const [taskError, setTaskError] = useState('')
    function handleTaskSubmit(event) {
        event.preventDefault();
        setTaskError('');
        if (!task) {
            setTaskError(`Task field cannot be empty. Please enter a task`)
        } else {
            onAddTask(task);
            setTask('');
        }
    }

    return <div>
        <form className="form-add-task" onSubmit={handleTaskSubmit}>
            <h2>{selectedEmployee.task ? `Update current task for ${selectedEmployee.name}` : `Create a task for ${selectedEmployee.name}`} </h2>
            <label>📝 Task Description</label>
            <input onChange={e => setTask(e.target.value)} value={task} type="text" placeholder="Enter task description"></input>
            <Button>{selectedEmployee.task ? `Update task` : ` Create task`}</Button>
        </form>
        {taskError && <h3 className="red">{taskError}</h3>}
    </div>
}