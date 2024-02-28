interface ICategoryItem {
    categoryName: string;
}

export const CategoryItem: React.FC<ICategoryItem> = ({ categoryName }) => {
    return (
        <div className="px-[12px] py-[6px] bg-slate-300 rounded-full font-poppins text-[#637381] cursor-pointer whitespace-nowrap">
            {categoryName}
        </div>
    );
};
