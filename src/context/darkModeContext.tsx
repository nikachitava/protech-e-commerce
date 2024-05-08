import { ReactNode, createContext, useEffect, useState } from "react";

interface IDarkThemeModeContext {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<IDarkThemeModeContext>({
    isDarkMode: false,
    toggleDarkMode: () => {},
});

interface IDarkThemeContextProviderProps {
    children: ReactNode;
}

export const DarkThemeContextProvider = ({
    children,
}: IDarkThemeContextProviderProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode == true) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
