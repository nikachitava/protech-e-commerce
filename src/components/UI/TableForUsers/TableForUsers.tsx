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
import { IUser } from "../../../interfaces/IUser";

export function TableForUsers() {
    const [users, setUsers] = useState<IUser[]>();

    const fetchUsers = () => {
        axios
            .get("http://localhost:3000/users")
            .then((response) => setUsers(response.data))
            .catch((err) => console.log("error fetching users: ", err));
    };

    const deleteUser = (userID: number) => {
        axios
            .delete(`http://localhost:3000/users/deleteuser/${userID}`)
            .then(() => {
                alert(`User deleted succesfully: ${userID}`);
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
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Surname</TableHeadCell>
                    <TableHeadCell>Email</TableHeadCell>
                    <TableHeadCell>Balance</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Edit</span>
                    </TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Delete</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {users &&
                        users.map((user: IUser) => (
                            <TableRow
                                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                key={user.userID}
                            >
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.surname}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>${user.balance}</TableCell>
                                <TableCell>
                                    <span className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer">
                                        Edit
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <span
                                        onClick={() => deleteUser(user.userID)}
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
