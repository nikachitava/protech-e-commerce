import { Outlet, useLocation } from "react-router-dom";
import { SideBar } from "../components/Sidebar/Sidebar";
import { FaHome, FaRegCompass } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineWhatshot, MdFeed } from "react-icons/md";
import { SideBarItem } from "../components/SideBarItem/SideBarItem";
import { NavBar } from "../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

export const Root = () => {
    const location = useLocation();
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <div className="grid grid-cols-[auto,1fr] grid-rows-[100vh] dark:bg-[#111827]">
            <SideBar>
                <Link to={"/"}>
                    <SideBarItem
                        icon={
                            <FaHome
                                size={20}
                                color={isDarkMode ? "white" : "#898E99"}
                            />
                        }
                        text="Home"
                        active={location.pathname == "/"}
                    />
                </Link>
                <Link to={"/discover"}>
                    <SideBarItem
                        icon={
                            <FaRegCompass
                                size={20}
                                color={isDarkMode ? "white" : "#898E99"}
                            />
                        }
                        text="Discover"
                        active={location.pathname == "/discover"}
                    />
                </Link>
                <Link to={"popular"}>
                    <SideBarItem
                        icon={
                            <MdOutlineWhatshot
                                size={20}
                                color={isDarkMode ? "white" : "#898E99"}
                            />
                        }
                        text="Popular Products"
                        active={location.pathname == "/popular"}
                    />
                </Link>

                <Link to={"feed"}>
                    <SideBarItem
                        icon={
                            <MdFeed
                                size={20}
                                color={isDarkMode ? "white" : "#898E99"}
                            />
                        }
                        text="Feed"
                        active={location.pathname == "/feed"}
                    />
                </Link>
                <Link to={"contact"}>
                    <SideBarItem
                        icon={
                            <FiPhoneCall
                                size={20}
                                color={isDarkMode ? "white" : "#898E99"}
                            />
                        }
                        text="Contact"
                        active={location.pathname == "/contact"}
                    />
                </Link>
            </SideBar>
            <div className="grid-row-1/2 overflow-y-auto p-6">
                <NavBar />

                <Outlet />
            </div>
        </div>
    );
};
