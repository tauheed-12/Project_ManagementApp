import Button from "./Button";
import left from "../assets/left.png";
import right from "../assets/right.png"

export default function ProjectSidebar({ onStartAddProject, projects, onSelectProject, selectProjectId, isSidebarOpen, setIsSidebarOpen }) {
    const sidebarClass = `fixed top-0 left-0 h-screen bg-darkblue text-stone-50 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0 w-64 sm:w-1/3 md:w-72' : '-translate-x-full w-16'
        }`;

    function handleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <aside className={sidebarClass}>
            <div className="p-8">
                <h2 className={`mb-8 font-bold uppercase md:text-xl text-stone-200 ${isSidebarOpen ? 'block' : 'hidden'}`}>Your Projects</h2>
                <div className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                    <Button onClick={onStartAddProject}>+ Add Project</Button>
                </div>
                <ul className={`mt-8 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                    {projects.map((project) => {
                        let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-blue-200 hover:bg-blue-700"

                        if (project.id === selectProjectId) {
                            cssClasses += ' bg-blue-700 text-blue-200'
                        } else {
                            cssClasses += ' text-blue-400'
                        }

                        return (
                            <li key={project.id}>
                                <button onClick={() => onSelectProject(project.id)}
                                    className={cssClasses}>
                                    {project.title}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <img
                src={isSidebarOpen ? left : right}
                onClick={handleSidebar}
                className="bg-darkblue text-darkblue w-8 h-8 absolute bottom-4 -right-4 cursor-pointer"
                alt="Toggle Sidebar"
            />
        </aside>
    )
}
