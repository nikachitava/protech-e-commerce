import { EditProfileLabels } from "../components/UI/EditProfileLabels/EditProfileLabels";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export const Settings = () => {
    return (
        <div className="mt-7">
            <Tabs aria-label="Default tabs" style="fullWidth">
                <Tabs.Item active title="Profile" icon={HiUserCircle}>
                    <EditProfileLabels />
                </Tabs.Item>
                <Tabs.Item title="Dashboard" icon={MdDashboard}>
                    This is{" "}
                    <span className="font-medium text-gray-800 dark:text-white">
                        Dashboard tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </Tabs.Item>
                <Tabs.Item title="Settings" icon={HiAdjustments}>
                    This is{" "}
                    <span className="font-medium text-gray-800 dark:text-white">
                        Settings tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </Tabs.Item>
                <Tabs.Item title="Contacts" icon={HiClipboardList}>
                    This is{" "}
                    <span className="font-medium text-gray-800 dark:text-white">
                        Contacts tab's associated content
                    </span>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </Tabs.Item>
                <Tabs.Item disabled title="Disabled">
                    Disabled content
                </Tabs.Item>
            </Tabs>
        </div>
    );
};
