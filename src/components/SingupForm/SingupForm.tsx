import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface FormData {
    username: string;
    surname: string;
    email: string;
    password: string;
    confPassword: string;
    acceptTerms: boolean;
}

export const SingupForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Click submit data: ", data);
    };

    const labelSuccesStyle =
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
    const labelErrorStyle =
        "block mb-2 text-sm font-medium text-red-700 dark:text-red-500";

    const inputSuccesStyle =
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

    const inputErrorStyle =
        "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";

    const messageSuccesStyle =
        "mt-2 text-sm text-green-600 dark:text-green-500";
    const messageErrorStyle = "mt-2 text-sm text-red-600 dark:text-red-500";

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
                            <span className="font-medium">Oops...!</span>{" "}
                            {errors.username.message}
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
                            required: true,
                            maxLength: 20,
                        })}
                    />
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
                        required: true,
                        maxLength: 30,
                    })}
                />
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
                            required: true,
                            maxLength: 20,
                        })}
                    />
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
                            required: true,
                            maxLength: 20,
                        })}
                    />
                </div>
            </div>
            <Link to={"/login"}>
                <p className="font-poppins text-xs text-gray-900 my-3">
                    I already have an account
                </p>
            </Link>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        {...register("acceptTerms", {})}
                    />
                </div>

                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
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
                className="text-white bg-[#FFC831] hover:bg-[#ffd152] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    );
};
