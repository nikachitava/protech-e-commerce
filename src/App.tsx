import { SideBar } from "./components/SideBar/SideBar";
import { FaHome } from "react-icons/fa";
import { SideBarItem } from "./components/SideBarItem/SideBarItem";
import { MdOutlineWhatshot } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { MdFeed } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { NavBar } from "./components/NavBar/NavBar";
import { Header } from "./components/Header/Header";

export default function App() {
    return (
        <>
            <div className="flex gap-7">
                <div className="flex">
                    <SideBar>
                        <SideBarItem
                            icon={<FaHome size={20} />}
                            text="Home"
                            active
                        />
                        <SideBarItem
                            icon={<FaRegCompass size={20} />}
                            text="Discover"
                        />
                        <SideBarItem
                            icon={<MdOutlineWhatshot size={20} />}
                            text="Popular Products"
                        />
                        <SideBarItem icon={<MdFeed size={20} />} text="Feed" />
                        <SideBarItem
                            icon={<FiPhoneCall size={20} />}
                            text="Contact"
                        />
                    </SideBar>
                </div>
                <div className="flex-1 pt-6 mr-7">
                    <NavBar />
                    <div className="mt-6">
                        <Header subheader={"Home"} header={"Best Products"} />
                    </div>
                </div>
            </div>
        </>
    );
}
