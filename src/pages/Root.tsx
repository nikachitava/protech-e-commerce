import { Outlet } from "react-router-dom";
import { SideBar } from "../components/Sidebar/Sidebar";
import { FaHome, FaRegCompass } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineWhatshot, MdFeed } from "react-icons/md";
import { SideBarItem } from "../components/SideBarItem/SideBarItem";
import { NavBar } from "../components/NavBar/NavBar";
import { Header } from "../components/Header/Header";
import { Link } from "react-router-dom";

export const Root = () => {
    return (
        <div className="grid grid-cols-[auto,1fr] grid-rows-[100vh] ">
            <SideBar>
                <Link to={"/"}>
                    <SideBarItem
                        icon={<FaHome size={20} />}
                        text="Home"
                        active
                    />
                </Link>
                <Link to={"/discover"}>
                    <SideBarItem
                        icon={<FaRegCompass size={20} />}
                        text="Discover"
                    />
                </Link>
                <Link to={"popular"}>
                    <SideBarItem
                        icon={<MdOutlineWhatshot size={20} />}
                        text="Popular Products"
                    />
                </Link>

                <Link to={"feed"}>
                    <SideBarItem icon={<MdFeed size={20} />} text="Feed" />
                </Link>
                <Link to={"contact"}>
                    <SideBarItem
                        icon={<FiPhoneCall size={20} />}
                        text="Contact"
                    />
                </Link>
            </SideBar>
            <div className="content grid-row-1/2 overflow-y-auto p-6">
                <NavBar />
                <div className="mt-6">
                    <Header subheader={"Home"} header={"Best Products"} />
                </div>

                <Outlet />
            </div>
        </div>
    );
};
