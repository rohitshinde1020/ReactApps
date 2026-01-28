import { useContext, useState } from "react"
import { Tododispathcontext, Todostatecontext } from "../context/TodoContext"


export default function Addtodo() {
    const dispatch = useContext(Tododispathcontext);
    const states = useContext(Todostatecontext);

    const [text, settext] = useState("");

    const handleSubmit = (e) => {
        if (text.length > 0) {
            e.preventDefault();
            dispatch({ type: 'added', id: states.length, text: text });
            settext("");
            console.log(states);
        }
        else {
            setError("Task cannot be empty ❌");
            setTimeout(() => setError(""), 3000); // auto hide
        }
    }

    return (
        <>
            <div className="add-todo flex flex-row gap-5 px-3 py-2 rounded-lg mb-4 w-[400px]">
                <input type="text"
                    placeholder="Add a new Task"
                    value={text}
                    onChange={(e) => settext(e.target.value)}
                    className="placeholder:text-gray-400 outline-0 p-3 w-7/10" />
                <button onClick={handleSubmit} className=" shadow-lg shadow-cyan-900 py-1 px-3 rounded-lg">Add</button>
            </div>

        </>
    )
}