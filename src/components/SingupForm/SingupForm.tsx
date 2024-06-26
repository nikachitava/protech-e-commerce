import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { IFormData } from "../../interfaces/IFormData";

const labelSuccesStyle =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
const labelErrorStyle =
    "block mb-2 text-sm font-medium text-red-700 dark:text-red-500";

const inputSuccesStyle =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const inputErrorStyle =
    "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";

const messageSuccesStyle = "mt-2 text-sm text-green-600 dark:text-green-500";
const messageErrorStyle = "mt-2 text-sm text-red-600 dark:text-red-500";

export const SingupForm = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFormData>();

    const watchPassword = watch("password");

    const onSubmit = (data: IFormData) => {
        axios
            .post("http://localhost:3000/auth/register", data)
            .then((response) => {
                console.log(response.data);
                window.location.reload();
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage(
                        "An error occurred while processing your request."
                    );
                }
            });
    };

    return (
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label
                        className={
                            errors.username ? labelErrorStyle : labelSuccesStyle
                        }
                    >
                        First name
                    </label>
                    <input
                        type="text"
                        id="first_name"
                        className={
                            errors.username ? inputErrorStyle : inputSuccesStyle
                        }
                        placeholder="Name"
                        {...register("username", {
                            pattern: {
                                value: /^[A-Za-z]+$/,
                                message: "Use latin letters",
                            },
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                        })}
                    />
                    {errors.username && (
                        <p
                            className={
                                errors.username
                                    ? messageErrorStyle
                                    : messageSuccesStyle
                            }
                        >
                            <span className="font-medium">
                                {errors.username.message}
                            </span>
                        </p>
                    )}
                </div>
                <div>
                    <label
                        className={
                            errors.surname ? labelErrorStyle : labelSuccesStyle
                        }
                    >
                        Last name
                    </label>
                    <input
                        type="text"
                        id="last_name"
                        className={
                            errors.surname ? inputErrorStyle : inputSuccesStyle
                        }
                        placeholder="Doe"
                        {...register("surname", {
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                            maxLength: 20,
                        })}
                    />
                    {errors.surname && (
                        <p
                            className={
                                errors.surname
                                    ? messageErrorStyle
                                    : messageSuccesStyle
                            }
                        >
                            <span className="font-medium">
                                {errors.surname.message}
                            </span>
                        </p>
                    )}
                </div>
            </div>
            <div className="mb-6">
                <label
                    className={
                        errors.email ? labelErrorStyle : labelSuccesStyle
                    }
                >
                    Email address
                </label>
                <input
                    type="email"
                    id="email"
                    className={
                        errors.email ? inputErrorStyle : inputSuccesStyle
                    }
                    placeholder="john.doe@company.com"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email field is required",
                        },
                        pattern: {
                            value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
                            message: "Enter correct email address",
                        },
                    })}
                />
                {errors.email && (
                    <p
                        className={
                            errors.email
                                ? messageErrorStyle
                                : messageSuccesStyle
                        }
                    >
                        <span className="font-medium">
                            {errors.email.message}
                        </span>
                    </p>
                )}
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="mb-6">
                    <label
                        className={
                            errors.password ? labelErrorStyle : labelSuccesStyle
                        }
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className={
                            errors.password ? inputErrorStyle : inputSuccesStyle
                        }
                        placeholder="•••••••••"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password field is required",
                            },
                        })}
                    />
                    {errors.password && (
                        <p
                            className={
                                errors.password
                                    ? messageErrorStyle
                                    : messageSuccesStyle
                            }
                        >
                            <span className="font-medium">
                                {errors.password.message}
                            </span>
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        className={
                            errors.confPassword
                                ? labelErrorStyle
                                : labelSuccesStyle
                        }
                    >
                        Confirm password
                    </label>
                    <input
                        type="password"
                        id="confirm_password"
                        className={
                            errors.confPassword
                                ? inputErrorStyle
                                : inputSuccesStyle
                        }
                        placeholder="•••••••••"
                        {...register("confPassword", {
                            required: {
                                value: true,
                                message: "Password confirmation is required",
                            },
                            validate: {
                                passwordMatch: (value) =>
                                    value === watchPassword ||
                                    "Password doesnt Match",
                            },
                        })}
                    />
                    {errors.confPassword && (
                        <p
                            className={
                                errors.confPassword
                                    ? messageErrorStyle
                                    : messageSuccesStyle
                            }
                        >
                            <span className="font-medium">
                                {errors.confPassword.message}
                            </span>
                        </p>
                    )}
                </div>
            </div>
            <div>
                <Link to={"/login"}>
                    <p className="font-poppins text-xs text-gray-900 my-3 dark:text-white">
                        I already have an account
                    </p>
                </Link>
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className={`w-4 h-4 border ${errors.acceptTerms ? "border-red-900 bg-red-50" : "border-gray-300 bg-gray-50"}  rounded focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800`}
                        {...register("acceptTerms", { required: true })}
                    />
                </div>

                <label
                    className={`ms-2 text-sm font-medium ${errors.acceptTerms ? "text-red-600 underline" : "text-gray-900"}  dark:text-gray-300`}
                >
                    I agree with the{" "}
                    <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                        terms and conditions
                    </a>
                </label>
            </div>

            <button
                type="submit"
                className="text-white bg-[#FFC831] hover:bg-[#ffd152] focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
            >
                Submit
            </button>
            {errorMessage && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errorMessage}
                </p>
            )}
        </form>
    );
};
