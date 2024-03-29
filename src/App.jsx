import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./Components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { PizzaInfo } from "./Components/PizzaInfo/PizzaInfo";

import "./scss/app.scss";

export function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/pizza/:id" element={<PizzaInfo />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}
