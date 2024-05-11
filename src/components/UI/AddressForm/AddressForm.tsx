import { FloatingLabel, Button } from "flowbite-react";
import { ToggleSwitch } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import { useForm, Controller } from "react-hook-form";

interface IAddressForm {
    address: string;
    district: string;
    phoneNumber: number;
    addressTitle: string;
}

export const AddressForm = () => {
    const [enableEdit, setEnableEdit] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IAddressForm>();

    const onSubmit = (data: IAddressForm) => {};

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
                                label="Address"
                                disabled={!enableEdit}
                                {...field}
                                color={errors.address && "error"}
                            />
                        )}
                        name="address"
                        control={control}
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
                    {errors.address && (
                        <p className="text-[10px] text-red-600">
                            {errors.address.message}
                        </p>
                    )}
                </div>

                <div>
                    <Controller
                        render={({ field }) => (
                            <FloatingLabel
                                variant="outlined"
                                label="District"
                                disabled={!enableEdit}
                                {...field}
                                color={errors.district && "error"}
                            />
                        )}
                        name="district"
                        control={control}
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
                    {errors.district && (
                        <p className="text-[10px] text-red-600">
                            {errors.district.message}
                        </p>
                    )}
                </div>
                <div>
                    <Controller
                        render={({ field }) => (
                            <FloatingLabel
                                variant="outlined"
                                label="Phone Number"
                                disabled={!enableEdit}
                                {...field}
                                color={errors.phoneNumber && "error"}
                            />
                        )}
                        name="phoneNumber"
                        control={control}
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address",
                            },
                        }}
                    />
                    {errors.phoneNumber && (
                        <p className="text-[10px] text-red-600">
                            {errors.phoneNumber.message}
                        </p>
                    )}
                </div>
                <div>
                    <Controller
                        render={({ field }) => (
                            <FloatingLabel
                                variant="outlined"
                                label="Address Title"
                                disabled={!enableEdit}
                                {...field}
                                color={errors.addressTitle && "error"}
                            />
                        )}
                        name="addressTitle"
                        control={control}
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address",
                            },
                        }}
                    />
                    {errors.addressTitle && (
                        <p className="text-[10px] text-red-600">
                            {errors.addressTitle.message}
                        </p>
                    )}
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
