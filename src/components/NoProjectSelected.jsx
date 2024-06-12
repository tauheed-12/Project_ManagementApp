import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="flex justify-center items-center flex-col h-screen  text-center w-full sm:w-2/3">
            <img src={noProjectImage} alt="An Empty Task List" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-xl font-bold text-darkblue my-4">No Project Selected</h2>
            <p className="text-blue-900 mb-4">Select a project or get started with a new one</p>
            <p className="mt-8">
                <Button onClick={onStartAddProject}>Create a new project</Button>
            </p>
        </div>
    )
}