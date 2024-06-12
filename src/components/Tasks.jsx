import NewTask from "./NewTask";


export default function Tasks({ onAdd, onDelete, tasks }) {
    console.log(tasks.length)
    return (
        <section className="w-2/4">
            <h2 className="text-xl sm:text-2xl font-bold text-darkestblue mb-4">Tasks</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && (<p className="text-darkestblue my-4">This project does not have any tasks yet</p>)}
            {tasks.length > 0 && (<ul className="p-4 mt-8 rounded-md w-3/4">
                {tasks.map((task) => <li key={task.id} className="flex justify-between my-4 bg-slate-200 p-2">
                    <span>{task.text}</span>
                    <button onClick={() => onDelete(task.id)} className="text-darkestblue hover:text-darkblue">Clear</button>
                </li>)}
            </ul>)}
        </section>
    )
}