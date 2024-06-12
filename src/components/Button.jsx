export default function Button({ children, ...props }) {
    return (
        <button {...props} className="px-4 py-2 text-xs md:text-base rounded-md bg-blue-700 text-blue-200 hover:bg-blue-600 hover:text-stone-100">
            {children}
        </button>
    )
}