import { ReactNode, createContext, useState } from "react";
import logo from "/images/icons/logo.svg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

interface ISideBarProps {
    children: ReactNode;
}

interface SideBarContextProps {
    expanded: boolean;
}

export const SideBarContext = createContext<SideBarContextProps>({
    expanded: true,
});

export const SideBar: React.FC<ISideBarProps> = ({ children }) => {
    const [expanded, setExpanded] = useState(true);

    const handleSideBar = () => {
        setExpanded((curr) => !curr);
    };
    const location = useLocation();

    if (location.pathname === "/admin") return null;
    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-[#F9FAFB] border-r shadow-sm dark:bg-[#111827] dark:border-r-[#383838]">
                <div className="flex justify-between items-center px-8 py-6">
                    <Link to={"/"}>
                        <img
                            src={logo}
                            className={`overflow-hidden transition-all ${
                                expanded ? "" : "w-0 h-0"
                            }`}
                            alt="logo"
                        />
                    </Link>

                    {expanded ? (
                        <IoMdArrowRoundBack
                            size={20}
                            color="#919EAB"
                            className="cursor-pointer"
                            onClick={handleSideBar}
                        />
                    ) : (
                        <IoMdArrowRoundForward
                            size={20}
                            color="#919EAB"
                            className="cursor-pointer"
                            onClick={handleSideBar}
                        />
                    )}
                </div>
                <SideBarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 mt-10">{children}</ul>
                </SideBarContext.Provider>
            </nav>
        </aside>
    );
};
