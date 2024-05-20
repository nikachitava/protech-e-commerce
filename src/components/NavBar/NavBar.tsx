import { SearchBar } from "../SearchBar/SearchBar";
import { IoMoon } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { Button } from "../Button/Button";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { UserAvatarDropDown } from "../UserAvatarDropDown/UserAvatarDropDown";
import { DarkModeContext } from "../../context/darkModeContext";

export const NavBar = () => {
    const { currentUser } = useContext(AuthContext);
    const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);
    const location = useLocation();

    return (
        <div className="flex justify-between items-center">
            <div>{location.pathname === "/" && <SearchBar />}</div>
            <div className="flex items-center gap-6">
                {isDarkMode ? (
                    <MdOutlineWbSunny
                        onClick={toggleDarkMode}
                        className="cursor-pointer"
                        color="white"
                        size={24}
                    />
                ) : (
                    <IoMoon
                        onClick={toggleDarkMode}
                        className="cursor-pointer"
                        color="grey"
                        size={24}
                    />
                )}
                {currentUser && (
                    <FaBell
                        className="cursor-pointer"
                        color={isDarkMode ? "white" : "grey"}
                        size={24}
                    />
                )}
                {currentUser && (
                    <FaShoppingCart
                        className="cursor-pointer"
                        color={isDarkMode ? "white" : "grey"}
                        size={24}
                    />
                )}
                {currentUser ? (
                    <UserAvatarDropDown avatar={currentUser.profilePic} />
                ) : (
                    <Link to={"/login"}>
                        <Button text="LOG IN" />
                    </Link>
                )}
            </div>
        </div>
    );
};
