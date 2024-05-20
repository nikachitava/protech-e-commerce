import EER_DIAGRAM from "/images/EER_DIAGRAM.png";

export const DbDescription = () => {
    return (
        <div className="p-4">
            <div className="mb-6">
                <h1 className="text-2xl font-poppins">About DataBase</h1>
                <ol className="list-disc list-outside">
                    <li>Author: Nika Tchitava</li>
                    <li>DB Name: Protech_DB</li>
                    <li>Last Update Date: 5.20/2024</li>
                </ol>
            </div>
            <div className="mb-6">
                <h1 className="text-2xl font-poppins">DataBase Description</h1>
                <ol className="list-disc list-outside">
                    <li>
                        The <span className="font-bold">brands</span> table
                        stores information about different product brands
                        available in the store, including brand names and
                        descriptions.
                    </li>
                    <li>
                        The <span className="font-bold">categories</span> table
                        organizes products into various categories for easier
                        navigation and filtering on the website.
                    </li>
                    <li>
                        The <span className="font-bold">personalInfo</span>{" "}
                        table contains personal details of users, such as
                        address, contact number, and possibly additional
                        demographic information, linked to the users table via a
                        foreign key.
                    </li>
                    <li>
                        The <span className="font-bold">products</span> table
                        holds information about the products sold on the site,
                        including product names, descriptions, prices, stock
                        levels, and foreign keys referencing brands and
                        categories for organizational purposes.
                    </li>
                    <li>
                        The <span className="font-bold">roles</span> table
                        defines different user roles (e.g., admin, customer)
                        within the system, which help in managing permissions
                        and access controls.
                    </li>
                    <li>
                        The <span className="font-bold">users</span> table
                        contains user account information, such as usernames,
                        passwords (hashed for security), email addresses, and
                        foreign keys referencing the roles table to define user
                        roles.
                    </li>
                    <li>
                        <span className="font-bold">Relationships</span> between
                        these tables are established through foreign keys,
                        ensuring data integrity and supporting complex queries
                        across the database.
                    </li>
                </ol>
            </div>
            <div className="mb-6">
                <h1 className="text-2xl font-poppins">DB schema diagram</h1>
                <img src={EER_DIAGRAM} alt="EER_DIAGRAM" />
            </div>
            <div>
                <h1 className="text-2xl font-poppins">
                    Scripts for creating tables
                </h1>
                <ol className="list-disc list-outside">
                    <li>
                        <h1>SHOW CREATE TABLE BRANDS;</h1>
                        <pre>
                            <code className="whitespace-pre-wrap">
                                CREATE TABLE `brands` (&#10; `brandID` int NOT
                                NULL AUTO_INCREMENT,&#10; `brandName`
                                varchar(45) NOT NULL,&#10; PRIMARY KEY
                                (`brandID`)&#10; ) ENGINE=InnoDB
                                AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4
                                COLLATE=utf8mb4_0900_ai_ci
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h1>SHOW CREATE TABLE CATEGORIES;</h1>
                        <pre>
                            <code className="whitespace-pre-wrap">
                                CREATE TABLE `categories` (&#10; `categoryID`
                                int NOT NULL AUTO_INCREMENT,&#10; `categoryName`
                                varchar(45) NOT NULL,&#10; PRIMARY KEY
                                (`categoryID`)&#10; ) ENGINE=InnoDB
                                AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4
                                COLLATE=utf8mb4_0900_ai_ci
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h1>SHOW CREATE TABLE PERSONALINFO;</h1>
                        <pre>
                            <code className="whitespace-pre-wrap">
                                CREATE TABLE `personalinfo` (&#10; `personalID`
                                int NOT NULL AUTO_INCREMENT,&#10; `address`
                                varchar(45) COLLATE utf8mb4_general_ci DEFAULT
                                NULL,&#10; `district` varchar(45) COLLATE
                                utf8mb4_general_ci DEFAULT NULL,&#10;
                                `phoneNumber` varchar(45) COLLATE
                                utf8mb4_general_ci DEFAULT NULL,&#10;
                                `addressTitle` varchar(45) COLLATE
                                utf8mb4_general_ci DEFAULT NULL,&#10;
                                `fk_userID` int DEFAULT NULL,&#10; PRIMARY KEY
                                (`personalID`),&#10; KEY `userID_idx`
                                (`fk_userID`),&#10; CONSTRAINT `fk_userID`
                                FOREIGN KEY (`fk_userID`) REFERENCES `users`
                                (`userID`) ON DELETE CASCADE ON UPDATE
                                CASCADE&#10; ) ENGINE=InnoDB AUTO_INCREMENT=10
                                DEFAULT CHARSET=utf8mb4
                                COLLATE=utf8mb4_general_ci
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h1>SHOW CREATE TABLE PRODUCTS;</h1>
                        <pre>
                            <code className="whitespace-pre-wrap">
                                CREATE TABLE `products` (&#10; `productID` int
                                NOT NULL AUTO_INCREMENT,&#10; `productName`
                                varchar(45) NOT NULL,&#10; `prodDescription`
                                varchar(200) DEFAULT NULL,&#10; `categoryID` int
                                DEFAULT NULL,&#10; `brandID` int DEFAULT
                                NULL,&#10; `userID` int DEFAULT NULL,&#10;
                                `image` varchar(256) NOT NULL DEFAULT
                                'https://www.elektroonika24.lv/wp-content/uploads/2019/10/binary.jpg',&#10;
                                `sales` int NOT NULL DEFAULT '0',&#10; `rate`
                                float NOT NULL DEFAULT '0',&#10; `discount`
                                float NOT NULL DEFAULT '0',&#10; `price` float
                                NOT NULL,&#10; PRIMARY KEY (`productID`),&#10;
                                KEY `brandID_idx` (`brandID`),&#10; KEY
                                `userID_idx` (`userID`),&#10; KEY
                                `categoryID_idx` (`categoryID`),&#10; CONSTRAINT
                                `brandID` FOREIGN KEY (`brandID`) REFERENCES
                                `brands` (`brandID`) ON UPDATE CASCADE,&#10;
                                CONSTRAINT `categoryID` FOREIGN KEY
                                (`categoryID`) REFERENCES `categories`
                                (`categoryID`) ON UPDATE CASCADE,&#10;
                                CONSTRAINT `userID` FOREIGN KEY (`userID`)
                                REFERENCES `users` (`userID`) ON UPDATE
                                CASCADE&#10; ) ENGINE=InnoDB AUTO_INCREMENT=31
                                DEFAULT CHARSET=utf8mb4
                                COLLATE=utf8mb4_0900_ai_ci
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h1>SHOW CREATE TABLE ROLES;</h1>
                        <pre>
                            <code className="whitespace-pre-wrap">
                                CREATE TABLE `roles` (&#10; `roleid` int NOT
                                NULL AUTO_INCREMENT,&#10; `roleName` varchar(45)
                                NOT NULL,&#10; PRIMARY KEY (`roleid`)&#10; )
                                ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT
                                CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
                            </code>
                        </pre>
                    </li>
                    <li>
                        <h1>SHOW CREATE TABLE USERS;</h1>
                        <pre>
                            <code className="whitespace-pre-wrap">
                                CREATE TABLE `users` (&#10; `userID` int NOT
                                NULL AUTO_INCREMENT,&#10; `username` varchar(45)
                                NOT NULL,&#10; `surname` varchar(200) NOT
                                NULL,&#10; `email` varchar(45) NOT NULL,&#10;
                                `roleID` int NOT NULL,&#10; `balance` int NOT
                                NULL,&#10; `password` varchar(45) NOT NULL,&#10;
                                `profilePic` varchar(300) DEFAULT '""',&#10;
                                PRIMARY KEY (`userID`),&#10; KEY `roleID_idx`
                                (`roleID`),&#10; CONSTRAINT `roleid` FOREIGN KEY
                                (`roleID`) REFERENCES `roles` (`roleid`) ON
                                UPDATE CASCADE&#10; ) ENGINE=InnoDB
                                AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4
                                COLLATE=utf8mb4_0900_ai_ci
                            </code>
                        </pre>
                    </li>
                </ol>
            </div>
        </div>
    );
};
