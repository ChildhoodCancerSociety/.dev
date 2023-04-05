import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  const peristentTheme = window.localStorage.getItem("theme");

  if(peristentTheme === "dark" || peristentTheme === "light") {
    return peristentTheme;
  }

  const mqTheme = window.matchMedia("(prefers-color-scheme: dark)");

  if(typeof mqTheme.matches === "boolean") {
    return mqTheme.matches ? "dark" : "light";
  }

  return "light";
}

interface ThemeData {
  theme: Theme;
  changeTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeData>({ theme: getInitialTheme(), changeTheme: () => {} });
const ThemeContextProvider = ThemeContext.Provider;

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, changeTheme] = useState<Theme>(getInitialTheme());

  return (
    <ThemeContextProvider value={{ theme, changeTheme }}>
      {children}
    </ThemeContextProvider>
  );
}

export const useDarkMode = () => useContext(ThemeContext);
