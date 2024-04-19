import { useState, createContext, useEffect, ReactNode } from "react";
import { IUser } from "../interfaces/IUser";
import axios from "axios";
import { ILoginData } from "../interfaces/ILoginData";

interface AuthContextType {
    currentUser: IUser | null;
    login: (inputs: ILoginData) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
    currentUser: null,
    login: async () => {},
});

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [currentUser, setCurrentUser] = useState<IUser | null>(
        JSON.parse(localStorage.getItem("user") || "null")
    );

    const login = async (inputs: ILoginData) => {
        try {
            const res = await axios.post(
                "http://localhost:3000/auth/login",
                inputs,
                {
                    withCredentials: true,
                }
            );
            setCurrentUser(res.data);
        } catch (error) {
            console.log("login error", error);
        }
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};
