import { Link } from "react-router-dom";
import { IProductCardProps } from "../../interfaces/IProductCardProps";
import sale from "/images/icons/sale.svg";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export const ProductCard: React.FC<IProductCardProps> = ({
    productID,
    productName,
    image,
    prodDescription,
    author,
    price,
    discount,
    sales,
    rate,
}) => {
    const { currentUser } = useContext(AuthContext);
    const isDiscount = discount == 0 ? false : true;

    return (
        <Link to={`/products/${productID}`}>
            <div className=" bg-[#f2f2f2] w-[316px] cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 dark:bg-dark-500 rounded-sm">
                {isDiscount && (
                    <img src={sale} className="absolute right-0 top-0 w-12" />
                )}
                <img
                    src={image}
                    alt={image}
                    className="w-[316px] h-[200px] rounded-md"
                />
                <div className="px-3 py-3">
                    <div>
                        <p className="text-[#36577a] font-semibold leading-5 text-sm font-poppins mb-1 dark:text-white">
                            {productName}
                        </p>
                        <p className="text-[#212B36] font-semibold leading-5 text-sm font-poppins mb-1 dark:text-white">
                            {prodDescription.substring(0, 50)}
                            <span className="text-[#637381] opacity-50 text-xs hover:underline hover:opacity-100 font-poppins dark:hover:text-[#cccccc]">
                                {"  "}....read more
                            </span>
                        </p>
                        <p className="text-[#637381] font-bold leading-5 text-xs font-poppins dark:text-deep-purple-100">
                            Seller: {author}
                        </p>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="flex gap-2 items-center mt-3 mb-2">
                                {isDiscount ? (
                                    <span className="text-[#ff5e31] font-semibold font-poppins line-through line opacity-70">
                                        ${price}
                                    </span>
                                ) : (
                                    <span className="text-[#FFC831] font-semibold font-poppins">
                                        ${price}
                                    </span>
                                )}
                                {isDiscount && (
                                    <span className="text-[#637381] font-semibold font-poppins">
                                        ${price - (price * discount) / 100}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-4 text-[#637381] font-medium leading-5 text-sm font-poppins dark:text-white">
                                {sales} sales
                                <div className="flex items-center font-bold">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.643 5.90392L15.7246 6.52493C16.0626 6.57473 16.3466 6.82079 16.4546 7.15767C16.5625 7.49747 16.4744 7.86656 16.2302 8.11848L13.2705 11.1122L13.9693 15.4066C14.0261 15.7582 13.8869 16.1155 13.6028 16.3235C13.3217 16.5315 12.9496 16.5579 12.6457 16.3909L8.99865 14.3843L5.35449 16.3909C5.04773 16.5579 4.67565 16.5315 4.39445 16.3235C4.11326 16.1155 3.97124 15.7582 4.03089 15.4066L4.72961 11.1122L1.76941 8.11848C1.52485 7.86656 1.43794 7.49747 1.5453 7.15767C1.65239 6.82079 1.93557 6.57473 2.27613 6.52493L6.35429 5.90392L8.18347 2.02754C8.33401 1.70485 8.65213 1.5 8.99865 1.5C9.34801 1.5 9.66613 1.70485 9.81667 2.02754L11.643 5.90392Z"
                                            fill="#FFC831"
                                        />
                                    </svg>
                                    {rate} (10)
                                </div>
                            </div>
                        </div>
                        {currentUser && (
                            <div className="p-3 bg-[#ced0d2] rounded-full cursor-pointer text-center">
                                <FaCartPlus color="grey" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};
