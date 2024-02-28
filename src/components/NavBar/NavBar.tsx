import { SearchBar } from "../SearchBar/SearchBar";
import moon from "/images/icons/moon.svg";
import bell from "/images/icons/bell.svg";
import bag from "/images/icons/bag.svg";
import { Button } from "../Button/Button";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import useravatar from "/images/icons/useravatar.svg";

export const NavBar = () => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <SearchBar />
            </div>
            <div className="flex items-center gap-6">
                <img src={moon} alt={moon} />
                <img src={bell} alt={bell} />
                <img src={bag} alt={bag} />
                <Button text="Become a seller" />
                <UserAvatar avatar={useravatar} />
            </div>
        </div>
    );
};
