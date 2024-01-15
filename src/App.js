import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./Components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";

import "./scss/app.scss";

export const RootContext = createContext({});

export function App() {
    const [searchItems, setSearchItems] = useState("");
    return (
        <RootContext.Provider value={{ searchItems, setSearchItems }}>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </RootContext.Provider>
    );
}
