import { useEffect, useState } from "react";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import axios from "axios";

interface Category {
    categoryID: number;
    categoryName: string;
}

export const Category = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/categories"
                );
                setCategories(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("errror");
            }
        };
        fetchCategories();
    }, []);

    return (
        <div className="">
            <ul className="overflow-x-auto flex items-center flex-wrap gap-4 cursor-grab">
                {categories.map((category) => (
                    <li key={category.categoryID}>
                        <CategoryItem categoryName={category.categoryName} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
