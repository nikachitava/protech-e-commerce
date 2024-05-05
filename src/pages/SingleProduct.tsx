import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProductCardProps } from "../interfaces/IProductCardProps";
import { Button } from "../components/Button/Button";

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

    const buyProd = () => {
        console.log("buy prod");
    };
    const addFav = () => {
        console.log("added to fav");
    };
    const addToCart = () => {
        console.log("added to cart");
    };

    const discountPrice =
        product &&
        product[0].price - (product[0].price * product[0].discount) / 100;

    return (
        <div className="mt-5 grid grid-cols-3 gap-5 bg-gray-100">
            {product ? (
                <>
                    <div>
                        <div className="p-5 bg-red-500">
                            <h1>{product[0].productName}</h1>
                            <img src={product[0].image} alt="product image" />
                            <div className="flex justify-between items-stretch mt-5">
                                <Button
                                    text="Add to favourites"
                                    onclick={addFav}
                                />
                                <Button
                                    text="Add to cart"
                                    onclick={addToCart}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 p-5 flex flex-col gap-5">
                        <div className="">
                            <div className="flex items-center  justify-between">
                                <p>Category:</p>
                                <p>{product[0].categoryName}</p>
                            </div>
                            <div className="flex items-center  justify-between">
                                <p>Brand:</p>
                                <p>{product[0].brandName}</p>
                            </div>
                            <div className="flex items-center  justify-between">
                                <p>Author:</p>
                                <p>{product[0].author}</p>
                            </div>
                        </div>
                        <div className="flex items-center  justify-between">
                            <p>{product[0].prodDescription}</p>
                        </div>
                    </div>
                    <div className="bg-gray-200 p-5 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between">
                                <p>Sales:</p>
                                <p>{product[0].sales}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Rate:</p>
                                <p>{product[0].rate}</p>
                            </div>
                            {product[0].discount !== 0 && (
                                <div className="flex items-center justify-between">
                                    <p>Discount:</p>
                                    <p>{product[0].discount} %</p>
                                </div>
                            )}
                            <div className="flex items-center justify-between">
                                <p>Price:</p>
                                <p>{product[0].price}</p>
                            </div>
                            {product[0].discount !== 0 && (
                                <div className="flex items-center justify-between">
                                    <p>Price after discount:</p>
                                    <p>{discountPrice} </p>
                                </div>
                            )}
                        </div>

                        <Button text="Buy Product" onclick={buyProd} />
                    </div>
                </>
            ) : (
                <h1>Error Fetching Product</h1>
            )}
        </div>
    );
};

// <div>
//     <h2>Product Details</h2>
//     {product ? (
//         <div>
//             <p>Product ID: {product[0].productID}</p>
//             <p>Name: {product[0].productName}</p>
//         </div>
//     ) : (
//         <p>Loading product...</p>
//     )}
// </div>
