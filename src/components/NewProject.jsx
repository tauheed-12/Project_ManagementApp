import Input from "./Inpute";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    const title = useRef();
    const description = useRef();
    const duedate = useRef();
    const modal = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const entereddescription = description.current.value;
        const enteredduedata = duedate.current.value;

        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        const enteredDate = new Date(enteredduedata);
        enteredDate.setHours(0, 0, 0, 0);
        const timeDiff = enteredDate - currentDate;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        if (enteredTitle.trim() === '' || entereddescription.trim() === '' || enteredduedata.trim() === '' || daysLeft < 0) {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: entereddescription,
            dueDate: enteredduedata
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="w-full p-2 sm:p-0 sm:w-[35rem] mt-16 ml-10">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button onClick={onCancel} className="text-darkestblue hover:text-blue-950">Cancel</button>
                    </li>
                    <li>
                        <button onClick={handleSave} className="px-6 py-2 rounded-md bg-darkestblue text-white hover:bg-darkblue">Save</button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" isTextarea={true} />
                    <Input type="date" ref={duedate} label="Due Date" />
                </div>
            </div>
        </>
    )
}