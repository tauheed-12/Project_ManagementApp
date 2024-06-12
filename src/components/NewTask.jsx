import { useState } from "react";

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }

    function handClick() {
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input value={enteredTask} onChange={handleChange} type="text" className=" w-68 sm:w-64 px-2 py-1 rounded-sm bg-blue-100" />
            <button className="w-24 text-darkestblue hover:text-blue-950 font-bold" onClick={handClick}>Add Task</button>
        </div>
    )
}