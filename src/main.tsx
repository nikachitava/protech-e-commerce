import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Discover } from "./pages/Discover.tsx";
import { Popular } from "./pages/Popular.tsx";
import { Feed } from "./pages/Feed.tsx";
import { Contact } from "./pages/Contact.tsx";
import { Root } from "./pages/Root.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="discover" element={<Discover />} />
            <Route path="popular" element={<Popular />} />
            <Route path="feed" element={<Feed />} />
            <Route path="contact" element={<Contact />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
