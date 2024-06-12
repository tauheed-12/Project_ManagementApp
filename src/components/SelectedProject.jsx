import React, { useRef } from "react";
import Tasks from "./Tasks";
import UpdateTask from "./UpdateTask";
import MyCalendar from "./MyCalendar";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks, onUpdate }) {

    const updateModalRef = useRef();

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const enteredDate = new Date(project.dueDate);
    enteredDate.setHours(0, 0, 0, 0);
    const timeDiff = enteredDate - currentDate;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    function handleUpdateClick() {
        updateModalRef.current.open();
    }

    return (
        <>
            <UpdateTask ref={updateModalRef} onUpdate={onUpdate} project={project} />
            <div className="w-full p-2 sm:p-0 mt-2 sm:mt-16 sm:ml-10">
                <header className="pb-4 mb-4 border-b-2 border-blue-300">
                    <div className="flex gap-2 sm:gap-0 items-center sm:flex-row">
                        <h1 className="text-xl sm:text-3xl flex-1 font-bold text-darkestblue mb-2">{project.title}</h1>
                        <div className="flex-1 flex-row justify-evenly items-center">
                            <button onClick={handleUpdateClick} className="px-2 py-1 sm:px-6 sm:py-2 rounded-md bg-blue-800 text-stone-50 hover:bg-blue-950 hover:text-white">Update</button>
                            <button onClick={onDelete} className="text-darkestblue hover:text-darkblue">Delete</button>
                        </div>
                    </div>
                    <p className="text-sm sm:text-md mb-4 text-blue-500">{formattedDate}</p>
                    <p className="mb-4 text-darkestblue">Number of days left: {daysLeft}</p>
                    <p className="text-darkestblue whitespace-pre-wrap">{project.description}</p>
                </header>
                <div className="flex flex-col p-2 sm:p-8 w-full sm:flex-row">
                    <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
                    <div>
                        <MyCalendar dueDate={project.dueDate} />
                    </div>
                </div>
            </div>
        </>
    );
}
