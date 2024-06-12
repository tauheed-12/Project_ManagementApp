import Calendar from "react-calendar";
import { useState } from "react";
import './MyCalendar.css'; // Make sure to create this CSS file

export default function MyCalendar({ dueDate }) {
    const [date, setDate] = useState(new Date());

    function onChange(newDate) {
        setDate(newDate);
    }

    function isSameDay(a, b) {
        return a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate();
    }

    function tileClassName({ date, view }) {
        if (view === 'month') {
            if (isSameDay(date, new Date())) {
                return 'highlight-today';
            } else if (isSameDay(date, new Date(dueDate))) {
                return 'highlight-due';
            }
        }
        return null;
    }

    return (
        <div className="bg-white shadow-md rounded-xl max-w-72">
            <Calendar
                onChange={onChange}
                value={date}
                className="w-full p-4 text-darkestblue"
                tileClassName={tileClassName}
            />
        </div>
    );
}
