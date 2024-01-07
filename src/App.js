import React from "react";

import { Header } from "./Components/Header";
import { Categories } from "./Components/Categories";
import { Sort } from "./Components/Sort";
import { PizzaBlock } from "./Components/PizzaBlock";

import "./scss/app.scss";

export function App() {
    return (
        <>
            <div class="wrapper">
                <Header />
                <div class="content">
                    <div class="container">
                        <Categories />
                        <Sort />
                        <h2 class="content__title">Все пиццы</h2>
                        <div class="content__items">
                            <PizzaBlock price={700} title="Бургер-пицца" />
                            <PizzaBlock price={450} title="Итальянская-пицца" />
                            <PizzaBlock price={1200} title="Чизбургер-пицца" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
