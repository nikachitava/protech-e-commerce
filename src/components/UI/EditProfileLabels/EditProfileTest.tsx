import { FloatingLabel, Button, FileInput, Label } from "flowbite-react";
import { ToggleSwitch } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

interface IFormInput {
    username: string;
    surname: string;
    email: string;
    image: string;
}

export const EditProfileTest = () => {
    const [enableEdit, setEnableEdit] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const { control, handleSubmit } = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        // alert(JSON.stringify(data));
        axios
            .post("http://localhost:3000/users/update", {
                ...data,
                userID: currentUser?.userID,
            })
            .then((respone) => alert("Change saved succesfully"))
            .catch((error) => {
                console.log(error);
            });
    };

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    render={({ field }) => (
                        <FloatingLabel
                            variant="outlined"
                            label="Name"
                            disabled={!enableEdit}
                            {...field}
                        />
                    )}
                    name="username"
                    control={control}
                    defaultValue={currentUser?.username}
                />

                <Controller
                    render={({ field }) => (
                        <FloatingLabel
                            variant="outlined"
                            label="Surname"
                            disabled={!enableEdit}
                            {...field}
                        />
                    )}
                    name="surname"
                    control={control}
                    defaultValue={currentUser?.surname}
                />
                <Controller
                    render={({ field }) => (
                        <FloatingLabel
                            variant="outlined"
                            label="Email"
                            disabled={!enableEdit}
                            {...field}
                        />
                    )}
                    name="email"
                    control={control}
                    defaultValue={currentUser?.email}
                />
                <Label
                    htmlFor="small-file-upload"
                    value="Upload Your avatar image"
                />
                <Controller
                    render={({ field }) => (
                        <FileInput
                            id="small-file-upload"
                            sizing="sm"
                            disabled={!enableEdit}
                            {...field}
                        />
                    )}
                    name="image"
                    control={control}
                />

                <Button
                    type="submit"
                    color="warning"
                    pill
                    disabled={!enableEdit}
                >
                    Save changes
                </Button>
            </form>
        </div>
    );
};
