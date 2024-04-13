import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { IProductCardProps } from "../../interfaces/IProductCardProps";

import image_not_found from "/images/image_not_found.png";
import axios from "axios";

export const Products = () => {
    const [products, setProducts] = useState<IProductCardProps[]>([]);

    useEffect(() => {
        fetchProdcuts();
    }, []);

    const fetchProdcuts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/products");
            setProducts(response.data);
        } catch (error) {
            console.log("fetching data error");
        }
    };

    return (
        <div className="flex justify-start flex-wrap gap-7 mt-7 mb-10">
            {products.map((product) => (
                <div key={product.productID}>
                    <ProductCard
                        image={image_not_found}
                        title={product.title}
                        author={product.author}
                        price={product.price}
                        discount={product.discount}
                        sales={product.sales}
                        rate={product.rate}
                    />
                </div>
            ))}
        </div>
    );
};
