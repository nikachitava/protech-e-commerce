import { useState, createContext, useEffect, ReactNode } from "react";
import { IUser } from "../interfaces/IUser";
import axios from "axios";
import { ILoginData } from "../interfaces/ILoginData";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    currentUser: IUser | null;
    login: (inputs: ILoginData) => Promise<void>;
    logout: any;
}

export const AuthContext = createContext<AuthContextType>({
    currentUser: null,
    login: async () => {},
    logout: async () => {},
});

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [currentUser, setCurrentUser] = useState<IUser | null>(
        JSON.parse(localStorage.getItem("user") || "null")
    );
    const navigate = useNavigate();

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
            navigate("/");
        } catch (error) {
            console.log("login error", error);
        }
    };

    const logout = async () => {
        try {
            await axios.post("http://localhost:3000/auth/logout", null, {
                withCredentials: true,
            });
            setCurrentUser(null);
            navigate("/");
        } catch (error) {
            console.log("logout error", error);
        }
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
