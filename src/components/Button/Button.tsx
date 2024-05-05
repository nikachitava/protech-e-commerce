interface IButtonProps {
    text: string;
    onclick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({ text, onclick }) => {
    return (
        <div
            onClick={onclick}
            className="bg-[#FFC831] px-6 py-2 rounded-full  text-center cursor-pointer font-poppins"
        >
            {text}
        </div>
    );
};
