import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home.tsx";
import { Discover } from "./pages/Discover.tsx";
import { Popular } from "./pages/Popular.tsx";
import { Feed } from "./pages/Feed.tsx";
import { Contact } from "./pages/Contact.tsx";
import { Root } from "./pages/Root.tsx";
import { LoginForm } from "./components/LoginForm/LoginForm.tsx";
import { SingupForm } from "./components/SingupForm/SingupForm.tsx";
import { AuthContextProvider } from "./context/authContext.tsx";
import { Settings } from "./pages/Settings.tsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SingleProduct } from "./pages/SingleProduct.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { DarkThemeContextProvider } from "./context/darkModeContext.tsx";
import { Admin } from "./pages/Admin.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router>
            <DarkThemeContextProvider>
                <AuthContextProvider>
                    <Routes>
                        <Route path="/" element={<Root />}>
                            <Route index element={<Home />} />
                            <Route path="discover" element={<Discover />} />
                            <Route path="popular" element={<Popular />} />
                            <Route path="feed" element={<Feed />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="login" element={<LoginForm />} />
                            <Route path="singup" element={<SingupForm />} />
                            <Route path="settings" element={<Settings />} />
                            <Route path="settings" element={<Settings />} />
                            <Route path="admin" element={<Admin />} />
                            <Route
                                path="products/:productID"
                                element={<SingleProduct />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </AuthContextProvider>
            </DarkThemeContextProvider>
        </Router>
    </React.StrictMode>
);
