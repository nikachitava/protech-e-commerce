import { SearchBar } from "../SearchBar/SearchBar";
import moon from "/images/icons/moon.svg";
import bell from "/images/icons/bell.svg";
import bag from "/images/icons/bag.svg";
import { Button } from "../Button/Button";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { UserAvatarDropDown } from "../UserAvatarDropDown/UserAvatarDropDown";
import { DarkModeContext } from "../../context/darkModeContext";

export const NavBar = () => {
    const { currentUser } = useContext(AuthContext);
    const { toggleDarkMode } = useContext(DarkModeContext);

    return (
        <div className="flex justify-between items-center">
            <div>
                <SearchBar />
            </div>
            <div className="flex items-center gap-6">
                <img src={moon} alt={moon} onClick={toggleDarkMode} />
                {currentUser && <img src={bell} alt={bell} />}
                {currentUser && <img src={bag} alt={bag} />}
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
