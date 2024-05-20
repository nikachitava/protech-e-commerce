import { Dropdown } from "flowbite-react";
import { useState } from "react";
import { TableForUsers } from "../components/UI/TableForUsers/TableForUsers";
import { TableForProdutcs } from "../components/UI/TableForProducts/TableForProducts";
import { DbDescription } from "../components/DbDescription/DbDescription";

export const Admin = () => {
    const [currentAction, setCurrentAction] = useState("getUsers");

    return (
        <div className="">
            <div className="mb-4">
                <Dropdown label="Choose action">
                    <Dropdown.Item
                        onClick={() => {
                            setCurrentAction("getUsers");
                        }}
                    >
                        Get all user
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            setCurrentAction("getProducts");
                        }}
                    >
                        Get all products
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            setCurrentAction("writeNews");
                        }}
                    >
                        Write news
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => {
                            setCurrentAction("description");
                        }}
                    >
                        Database Description
                    </Dropdown.Item>
                </Dropdown>
            </div>

            <div className="flex-1">
                {currentAction === "getUsers" && <TableForUsers />}
                {currentAction === "getProducts" && <TableForProdutcs />}
                {/* currentAction === "getProducts" && <TableForProdutcs /> */}
                {currentAction === "description" && <DbDescription />}
            </div>
        </div>
    );
};
