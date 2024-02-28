import { useContext } from "react";
import { SideBarContext } from "../SideBar/SideBar";

interface ISideBarItemProps {
    icon: JSX.Element;
    text: string;
    active?: boolean;
}

export const SideBarItem: React.FC<ISideBarItemProps> = ({
    icon,
    text,
    active,
}) => {
    const { expanded } = useContext(SideBarContext);
    return (
        <li
            className={`relative flex items-center px-7 py-4 transition-colors group cursor-pointer ${
                active
                    ? "bg-[#EFF2F5] text-[#FFC831]"
                    : "hover:bg-[#EFF2F5] text-gray-500"
            }`}
        >
            {icon}
            <span
                className={`font-poppins overflow-hidden transition-all ml-4 ${active ? "text-[#212B36]" : "text-[#637381]"}
                ${expanded ? "w-52 ml-3" : "w-0 h-0"}`}
            >
                {text}
            </span>
            {!expanded && (
                <div
                    className={`
                        absolute left-full rounded-md px-2 py-1 ml-6
                        bg-indigo-100 text-indigo-800 text-sm
                        invisible opacity-20 -translate-x-3 transition-all
                        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                    `}
                >
                    {text}
                </div>
            )}
        </li>
    );
};
