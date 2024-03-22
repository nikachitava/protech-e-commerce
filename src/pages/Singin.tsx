/*
https://flowbite.com/docs/forms/input-field/

for validation error and succes message
*/

import { LoginForm } from "../components/LoginForm/LoginForm";
import { SingupForm } from "../components/SingupForm/SingupForm";

export const Singin = () => {
    return <div className="">{isLogin ? <LoginForm /> : <SingupForm />}</div>;
};
