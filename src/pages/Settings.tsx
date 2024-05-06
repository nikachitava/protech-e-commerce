import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { FaUserCog } from "react-icons/fa";
import { FloatLabel } from "../components/UI/FloatLabel/FloatLabel";

export const Settings = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="mt-7">
            <div className="flex items-center gap-2">
                <FaUserCog />
                <h1 className="font-mono">Hello, {currentUser?.username}</h1>
            </div>
            <hr className="mt-2 mb-9" />
            <div className="flex justify-stretch gap-9">
                <div>
                    <ul className="">
                        <li className="text-base text-gray-600 cursor-pointer py-2 pr-28 border-r-2">
                            Profile
                        </li>
                        <li className="text-base text-gray-600 cursor-pointer py-2 pr-28 border-r-2">
                            Address
                        </li>
                        <li className="text-base text-gray-600 cursor-pointer py-2 pr-28 border-r-2">
                            Change Password
                        </li>
                    </ul>
                </div>
                <div className="w-[40%]">
                    <FloatLabel />
                </div>
            </div>
        </div>
    );
};
