import React, { useState, useEffect } from "react";
import axios from "axios";

import { Categories } from "../Components/Categories";
import { Sort } from "../Components/Sort";
import { PizzaBlock } from "../Components/PizzaBlock";
import { PizzaSkeleton } from "../Components/PizzaBlock/PizzaSkeleton";

export function Home() {
    const [pizzasItems, setPizzasItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    "https://657c99bc853beeefdb99afd3.mockapi.io/PizzaItems"
                );
                setLoading(false);
                setPizzasItems(data);
            } catch (error) {
                alert("Не удалось получить данные. Мы работаем над этим :(");
                console.error(error);
            }
        })();
    }, []);
    return (
        <>
            <div className="container">
                <Categories />
                <Sort />
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {loading
                        ? [...new Array(6)].map((_, i) => (
                              <PizzaSkeleton key={i} />
                          ))
                        : pizzasItems.map((items) => (
                              <PizzaBlock key={items.id} {...items} />
                          ))}
                </div>
            </div>
        </>
    );
}
