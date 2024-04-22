import { useState, createContext, useEffect, ReactNode } from "react";
import { IUser } from "../interfaces/IUser";
import axios from "axios";
import { ILoginData } from "../interfaces/ILoginData";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    currentUser: IUser | null;
    login: (inputs: ILoginData) => Promise<void>;
    logout: any;
    errorMessage: string | null;
}

export const AuthContext = createContext<AuthContextType>({
    currentUser: null,
    login: async () => {},
    logout: async () => {},
    errorMessage: null,
});

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [currentUser, setCurrentUser] = useState<IUser | null>(
        JSON.parse(localStorage.getItem("user") || "null")
    );
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const login = async (inputs: ILoginData) => {
        try {
            await axios
                .post("http://localhost:3000/auth/login", inputs, {
                    withCredentials: true,
                })
                .then((response) => {
                    setCurrentUser(response.data);
                    navigate("/");
                })
                .catch((error) => {
                    if (error.response && error.response.data) {
                        setErrorMessage(error.response.data.message);
                    } else {
                        setErrorMessage(
                            "An error occurred while processing your request."
                        );
                    }
                });
        } catch (error) {}
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
        <AuthContext.Provider
            value={{ currentUser, login, logout, errorMessage }}
        >
            {children}
        </AuthContext.Provider>
    );
};
