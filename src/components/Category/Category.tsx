import { CategoryItem } from "../CategoryItem/CategoryItem";

export const Category = () => {
    return (
        <div className="">
            <ul className="w-[1140px] overflow-x-auto flex items-center gap-7 cursor-grab">
                <li>
                    <CategoryItem categoryName={"All"} />
                </li>
                <li>
                    <CategoryItem categoryName={"Clothes"} />
                </li>
                <li>
                    <CategoryItem categoryName={"Food"} />
                </li>
                <li>
                    <CategoryItem categoryName={"Tech"} />
                </li>
                <li>
                    <CategoryItem categoryName={"All"} />
                </li>
                <li>
                    <CategoryItem categoryName={"All"} />
                </li>
                <li>
                    <CategoryItem categoryName={"All"} />
                </li>
                <li>
                    <CategoryItem categoryName={"All"} />
                </li>
                <li>
                    <CategoryItem categoryName={"All"} />
                </li>
                <li>
                    <CategoryItem categoryName={"asd"} />
                </li>
                <li>
                    <CategoryItem categoryName={"Alqqweweqwewl"} />
                </li>
            </ul>
        </div>
    );
};
