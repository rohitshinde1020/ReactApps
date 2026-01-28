import { createContext, useEffect, useReducer } from "react";

export const ThemeStateContext = createContext();
export const ThemeDispatchContext = createContext();

const initialTheme = "light";

function initTheme() {
  return localStorage.getItem("theme") || "light";
}

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, initialTheme, initTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme; 
  }, [theme]);

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}
