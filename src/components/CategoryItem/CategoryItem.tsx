interface ICategoryItem {
    categoryName: string;
    isActive: boolean;
}

export const CategoryItem: React.FC<ICategoryItem> = ({
    categoryName,
    isActive,
}) => {
    return (
        <div
            className={`${isActive && "bg-blue-200 dark:text-black"} px-[12px] py-[6px] bg-slate-300 rounded-full font-poppins text-[#000000] cursor-pointer whitespace-nowrap dark:text-white`}
        >
            {categoryName}
        </div>
    );
};
