import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa";
import { EditProfileLabels } from "../components/UI/EditProfileLabels/EditProfileLabels";
import { AddressForm } from "../components/UI/AddressForm/AddressForm";

export const Settings = () => {
    return (
        <div className="mt-7">
            <Tabs aria-label="Default tabs" style="fullWidth">
                <Tabs.Item active title="Profile" icon={HiUserCircle}>
                    <EditProfileLabels />
                </Tabs.Item>
                <Tabs.Item title="Address Book" icon={FaAddressBook}>
                    <AddressForm />
                </Tabs.Item>
            </Tabs>
        </div>
    );
};
