import { useContext } from "react";
import { ThemeStateContext, ThemeDispatchContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const theme = useContext(ThemeStateContext);
  const dispatch = useContext(ThemeDispatchContext);

  return (
    <button className="px-4 py-2 absolute top-[3%] right-[3%] md:top-[3%] md:right-[15%]" onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
