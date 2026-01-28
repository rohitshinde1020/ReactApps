import { useContext } from "react"
import { Headingcontext } from "./context";

export default function Component3(){
    const user=useContext(Headingcontext);
    return (
        <div>
            <h1>Component3</h1>
            <h2>{user}</h2>
        </div>
    )
}