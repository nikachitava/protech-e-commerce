interface IHeaderProps {
    subheader: string;
    header: string;
}

export const Header: React.FC<IHeaderProps> = ({ subheader, header }) => {
    return (
        <div>
            <h5 className="text-[#637381] text-sm font-poppins leading-5 dark:text-blue-gray-100">
                {subheader}
            </h5>
            <h1 className="font-poppins font-semibold text-lg text-[#212B36] leading-6 dark:text-gray-200">
                {header}
            </h1>
        </div>
    );
};
