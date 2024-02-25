import { SideBar } from "./components/SideBar/SideBar";
import { FaHome } from "react-icons/fa";
import { SideBarItem } from "./components/SideBarItem/SideBarItem";
import { MdOutlineWhatshot } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { MdFeed } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

export default function App() {
    return (
        <>
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
        </>
    );
}
