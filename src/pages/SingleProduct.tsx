import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProductCardProps } from "../interfaces/IProductCardProps";

export const SingleProduct: React.FC = () => {
    const { productID } = useParams();

    const [product, setProduct] = useState<IProductCardProps[] | null>(null);

    useEffect(() => {
        fetchProduct();
    }, [productID]);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/products/${productID}`
            );
            setProduct(response.data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    return (
        <div>
            <h2>Product Details</h2>
            {product ? (
                <div>
                    <p>Product ID: {product[0].productID}</p>
                    <p>Name: {product[0].productName}</p>
                </div>
            ) : (
                <p>Loading product...</p>
            )}
        </div>
    );
};
