import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, isTextarea, ...props }, ref) {
    const classes = "w-full p-1 border-b-2 rounded-sm border-blue-300 bg-blue-100 text-darkestblue focus:outline-none focus:border-blue-600";
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-darkestblue">{label}</label>
            {isTextarea ? <textarea ref={ref} className={classes} {...props} /> : <input ref={ref} className={classes} {...props} />}
        </p>
    )
});

export default Input;