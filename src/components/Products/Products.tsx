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

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const pattern = "https://example.com/";

    return (
        <>
            <div className="flex items-center justify-between flex-wrap gap-7 mt-7 mb-10">
                {currentItems.map((product) => (
                    <div key={product.productID}>
                        <ProductCard
                            productName={product.productName}
                            image={
                                product.image.substring(0, 20) !== pattern
                                    ? product.image
                                    : image_not_found
                            }
                            prodDescription={product.prodDescription}
                            author={product.author}
                            price={product.price}
                            discount={
                                product.discount == 0 ? null : product.discount
                            }
                            sales={product.sales}
                            rate={product.rate}
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-end items-center gap-4">
                <button
                    disabled={currentPage == 1}
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        ></path>
                    </svg>
                    Previous
                </button>

                <button
                    disabled={currentPage == totalPages}
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        ></path>
                    </svg>
                </button>
            </div>
        </>
    );
};
