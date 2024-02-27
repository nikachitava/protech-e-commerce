interface IButtonProps {
    text: string;
}

export const Button: React.FC<IButtonProps> = ({ text }) => {
    return (
        <div className="bg-[#FFC831] px-6 py-2 rounded-full  text-center cursor-pointer">
            {text}
        </div>
    );
};
