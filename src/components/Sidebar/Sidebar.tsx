import { ReactNode, createContext, useState } from "react";
import logo from "/images/icons/logo.svg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

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
    return (
        <aside className={`h-screen w-64`}>
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="flex justify-between items-center px-8 py-6">
                    <img
                        src={logo}
                        className={`overflow-hidden transition-all ${
                            expanded ? "w-10" : "w-0 h-0"
                        }`}
                        alt="logo"
                    />

                    <div
                        className={`w-[1px] h-10 bg-gray-300 overflow-hidden transition-all ${
                            expanded ? "w-10" : "w-0 h-0"
                        }`}
                    ></div>
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
