import { useState, createContext, useEffect, ReactNode } from "react";
import { IUser } from "../interfaces/IUser";

interface AuthContextType {
    currentUser: IUser | null;
}

export const AuthContext = createContext<AuthContextType>({
    currentUser: null,
});

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [currentUser, setCurrentUser] = useState<IUser | null>(
        JSON.parse(localStorage.getItem("user") || "null")
    );

    const login = () => {
        //TO DO
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
