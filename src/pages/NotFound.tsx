import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full font-bold font-poppins text-[30px]">
            <Link to={"/"}>
                <p className="animate-bounce text-red-700">BACK HOME</p>
            </Link>
            <h1 className="animate-pulse text-red-500">404 - PAGE NOT FOUND</h1>
        </div>
    );
};
