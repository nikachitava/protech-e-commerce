import React from "react";
import { useEffect, useState } from "react";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import axios from "axios";

interface Category {
    categoryID: number;
    categoryName: string;
}

interface ICategoryProps {
    children: JSX.Element;
}

export const Category: React.FC<ICategoryProps> = ({ children }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [currentCategory, setCurrentCategory] = useState("");

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/categories"
            );
            setCategories(response.data);
        } catch (error) {
            console.log("errror");
        }
    };

    const handleCurrentCategory = (category: string) => {
        setCurrentCategory(category);
    };

    return (
        <div>
            <ul className="overflow-x-auto flex items-center flex-wrap gap-4 cursor-grab">
                <li onClick={() => handleCurrentCategory("")}>
                    <CategoryItem categoryName="All" />
                </li>
                {categories.map((category) => (
                    <li
                        key={category.categoryID}
                        onClick={() =>
                            handleCurrentCategory(category.categoryName)
                        }
                    >
                        <CategoryItem categoryName={category.categoryName} />
                    </li>
                ))}
            </ul>
            {React.cloneElement(children, { additionalProps: currentCategory })}
        </div>
    );
};
