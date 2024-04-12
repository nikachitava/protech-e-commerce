import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface ILoginData {
    email: string;
    password: string;
}

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

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginData>();

    const onSubmit = () => {
        console.log("onsubmit");
    };

    return (
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
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
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
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
            </div>
            <Link to={"/singup"}>
                <p className="font-poppins text-xs text-gray-900 my-3">
                    I don't have an account
                </p>
            </Link>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <button
                    type="submit"
                    className="text-white bg-[#FFC831] hover:bg-[#ffd152] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};
