import { FloatingLabel, Button } from "flowbite-react";
import { ToggleSwitch } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

interface IAddressForm {
    address: string;
    district: string;
    phoneNumber: number;
    addressTitle: string;
}

export const AddressForm = () => {
    const [userPersonalInfo, setUserPersonalInfo] =
        useState<IAddressForm | null>(null);
    const [enableEdit, setEnableEdit] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IAddressForm>();

    const onSubmit = (data: IAddressForm) => {
        axios
            .post("http://localhost:3000/users/updatepersonalinfo", {
                ...data,
                userID: currentUser?.userID,
            })
            .then(() => alert("Change saved succesfully"))
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (currentUser && currentUser.userID) {
            axios
                .get(
                    `http://localhost:3000/users/getpersonalinfo?userID=${currentUser.userID}`
                )
                .then((response) => {
                    setUserPersonalInfo(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching personal info:", error);
                });
        }
    }, []);

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
                        defaultValue={userPersonalInfo?.address}
                        rules={{
                            maxLength: {
                                value: 70,
                                message: "Address cannot exceed 70 characters",
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
                        defaultValue={userPersonalInfo?.district}
                        rules={{
                            maxLength: {
                                value: 50,
                                message: "District cannot exceed 50 characters",
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
                        defaultValue={userPersonalInfo?.phoneNumber}
                        rules={{
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Only numbers",
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
                        defaultValue={userPersonalInfo?.addressTitle}
                        name="addressTitle"
                        control={control}
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
