import React, { forwardRef, useImperativeHandle, useRef } from "react";
import ReactDOM from "react-dom";
import Input from "./Inpute";
import Button from "./Button";

const UpdateTask = forwardRef(function UpdateTask({ onUpdate, project }, ref) {
    const updatedTitle = useRef();
    const updatedDescription = useRef();
    const updatedDueDate = useRef();
    const dialog = useRef();

    function handleUpdateClick(event) {
        event.preventDefault();
        const title = updatedTitle.current.value;
        const description = updatedDescription.current.value;
        const dueDate = updatedDueDate.current.value;
        onUpdate({
            title: title,
            description: description,
            dueDate: dueDate
        });
        dialog.current.close();
    }

    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
        },
        close() {
            dialog.current.close();
        }
    }));

    return ReactDOM.createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            <form method="dialog" className="mt-4 text-right" onSubmit={handleUpdateClick}>
                <Input type="text" ref={updatedTitle} label="Title" defaultValue={project.title} />
                <Input ref={updatedDescription} label="Description" isTextarea={true} defaultValue={project.description} />
                <Input type="date" ref={updatedDueDate} label="Due Date" defaultValue={project.dueDate} />
                <Button type="button" onClick={handleUpdateClick}>Update</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default UpdateTask;
