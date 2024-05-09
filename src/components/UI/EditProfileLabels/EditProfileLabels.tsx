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

export const EditProfileLabels = () => {
    const [enableEdit, setEnableEdit] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        // alert(JSON.stringify(data));
        axios
            .post("http://localhost:3000/users/update", {
                ...data,
                userID: currentUser?.userID,
            })
            .then(() => alert("Change saved succesfully"))
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
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <Controller
                        render={({ field }) => (
                            <FloatingLabel
                                variant="outlined"
                                label="Name"
                                disabled={!enableEdit}
                                {...field}
                                color={errors.username && "error"}
                            />
                        )}
                        name="username"
                        control={control}
                        defaultValue={currentUser?.username}
                        rules={{
                            required: "Username is requared.",
                            pattern: {
                                value: /^[A-Za-z]+$/,
                                message: "Only characters are allowed",
                            },
                            maxLength: {
                                value: 20,
                                message: "Username cannot exceed 20 characters",
                            },
                        }}
                    />
                    {errors.username && (
                        <p className="text-[10px] text-red-600">
                            {errors.username.message}
                        </p>
                    )}
                </div>

                <div>
                    <Controller
                        render={({ field }) => (
                            <FloatingLabel
                                variant="outlined"
                                label="Surname"
                                disabled={!enableEdit}
                                {...field}
                                color={errors.surname && "error"}
                            />
                        )}
                        name="surname"
                        control={control}
                        defaultValue={currentUser?.surname}
                        rules={{
                            required: "Surname is requared.",
                            pattern: {
                                value: /^[A-Za-z]+$/,
                                message: "Only characters are allowed",
                            },
                            maxLength: {
                                value: 20,
                                message: "Surname cannot exceed 20 characters",
                            },
                        }}
                    />
                    {errors.surname && (
                        <p className="text-[10px] text-red-600">
                            {errors.surname.message}
                        </p>
                    )}
                </div>
                <div>
                    <Controller
                        render={({ field }) => (
                            <FloatingLabel
                                variant="outlined"
                                label="Email"
                                disabled={!enableEdit}
                                {...field}
                                color={errors.email && "error"}
                            />
                        )}
                        name="email"
                        control={control}
                        defaultValue={currentUser?.email}
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address",
                            },
                        }}
                    />
                    {errors.email && (
                        <p className="text-[10px] text-red-600">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div>
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
                </div>

                <div>
                    <Button
                        type="submit"
                        color="warning"
                        pill
                        disabled={!enableEdit}
                    >
                        Save changes
                    </Button>
                </div>
            </form>
        </div>
    );
};
