import axios from "axios";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { IProductCardProps } from "../../../interfaces/IProductCardProps";

export function TableForProdutcs() {
    const [products, setProducts] = useState<IProductCardProps[]>();

    const fetchUsers = () => {
        axios
            .get("http://localhost:3000/products")
            .then((response) => setProducts(response.data))
            .catch((err) => console.log("error fetching users: ", err));
    };

    const deleteProduct = (productID: number) => {
        axios
            .delete(`http://localhost:3000/products/deleteproduct/${productID}`)
            .then(() => {
                alert(`Product deleted succesfully: ${productID}`);
                fetchUsers();
            });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="overflow-x-auto">
            <Table hoverable>
                <TableHead>
                    <TableHeadCell>ID</TableHeadCell>
                    <TableHeadCell>Author</TableHeadCell>
                    <TableHeadCell>Product Name</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Edit</span>
                    </TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Delete</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {products &&
                        products.map((product: IProductCardProps) => (
                            <TableRow
                                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                key={product.productID}
                            >
                                <TableCell>{product.productID}</TableCell>
                                <TableCell>{product.author}</TableCell>
                                <TableCell>{product.productName}</TableCell>
                                <TableCell>${product.price}</TableCell>
                                <TableCell>
                                    <span className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer">
                                        Edit
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <span
                                        onClick={() =>
                                            deleteProduct(product.productID)
                                        }
                                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
                                    >
                                        Delete
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </div>
    );
}
