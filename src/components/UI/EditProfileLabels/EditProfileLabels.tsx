import { FloatingLabel, Button, FileInput, Label } from "flowbite-react";
import { ToggleSwitch } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/authContext";

export const EditProfileLabels = () => {
    const [enableEdit, setEnableEdit] = useState(false);

    const { currentUser } = useContext(AuthContext);

    return (
        <div className="grid grid-flow-row justify-stretch space-y-4 font-mono">
            <div className="flex justify-end">
                <ToggleSwitch
                    checked={enableEdit}
                    label="Edit mode"
                    onChange={setEnableEdit}
                    color="yellow"
                />
            </div>
            <FloatingLabel
                variant="outlined"
                label="Name"
                value={currentUser?.username}
                disabled={!enableEdit}
            />
            <FloatingLabel
                variant="outlined"
                label="Surname"
                value={currentUser?.surname}
                disabled={!enableEdit}
            />
            <FloatingLabel
                variant="outlined"
                label="Email"
                value={currentUser?.email}
                disabled={!enableEdit}
            />
            <Label
                htmlFor="small-file-upload"
                value="Upload Your avatar image"
            />
            <FileInput
                id="small-file-upload"
                sizing="sm"
                disabled={!enableEdit}
            />
            <Button color="warning" pill disabled={!enableEdit}>
                Save changes
            </Button>
        </div>
    );
};
