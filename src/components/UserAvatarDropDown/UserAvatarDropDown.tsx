import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

interface IUserAvatar {
    avatar: string;
}

export const UserAvatarDropDown: React.FC<IUserAvatar> = ({ avatar }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<any>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: any) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const { logout, currentUser } = useContext(AuthContext);

    const handleLogOut = async () => {
        await logout();
    };

    return (
        <div
            className="relative inline-block text-left cursor-pointer"
            ref={dropdownRef}
        >
            <div
                onClick={toggleDropdown}
                className="border-dashed w-[40px] h-auto p-1 border-2 rounded-full border-[#FFC831] overflow-hidden"
            >
                <img src={avatar} className="relative" alt="useravatar" />
            </div>
            {/* Dropdown menu */}
            {isOpen && (
                <div
                    id="DropDown"
                    className="z-10 absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg dark:bg-gray-700 shadow-lg"
                >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                            <p className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">
                                Balance:{" "}
                                <span className="font-bold text-green-400">
                                    {currentUser?.balance}
                                </span>
                            </p>
                        </li>
                        <Link to={"/settings"}>
                            <li>
                                <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Settings
                                </p>
                            </li>
                        </Link>
                        <li onClick={handleLogOut}>
                            <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Log Out
                            </p>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
