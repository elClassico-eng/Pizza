import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { Categories } from "../Components/Categories";
import { Sort } from "../Components/Sort";
import { PizzaBlock } from "../Components/PizzaBlock";
import { PizzaSkeleton } from "../Components/PizzaBlock/PizzaSkeleton";

import { RootContext } from "../App";

export function Home() {
    const [pizzasItems, setPizzasItems] = useState([]);
    const [categoriesID, setCategoriesID] = useState(0);
    const [sortItems, setSortItems] = useState({
        name: "популярности",
        description: "rating",
        sortOrder: "desc",
    });
    const [loading, setLoading] = useState(true);

    const { searchItems } = useContext(RootContext);

    const filteredPizzas = pizzasItems.filter((items) => {
        return items.title.toLowerCase().includes(searchItems.toLowerCase());
    });

    const categories = categoriesID > 0 ? `category=${categoriesID}` : "";
    const sort = sortItems.description;
    const sortOrder = sortItems.sortOrder;
    const searchValue = searchItems ? `&search=${searchItems}` : "";

    const onClickCategory = (index) => {
        setCategoriesID(index);
    };

    const onClickSort = (obj) => {
        setSortItems(obj);
    };

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(
                    `https://657c99bc853beeefdb99afd3.mockapi.io/PizzaItems?${categories}&sortBy=${sort}&order=${sortOrder}${searchValue}`
                );
                setPizzasItems(data);
            } catch (error) {
                alert("Не удалось получить данные. Мы работаем над этим :(");
                console.error(error);
            } finally {
                setLoading(false);
            }
        })();
        window.scrollTo(0, 0);
    }, [categoriesID, sortItems, searchItems]);
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    categoriesID={categoriesID}
                    onClickCategory={onClickCategory}
                />
                <Sort sortItems={sortItems} onClickSort={onClickSort} />
            </div>
            {searchItems ? (
                <h2 className="content__title">Поиск по "{searchItems}"</h2>
            ) : (
                <h2 className="content__title">Все пиццы</h2>
            )}
            <div className="content__items">
                {loading
                    ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />)
                    : filteredPizzas.map((items) => (
                          <PizzaBlock key={items.id} {...items} />
                      ))}
            </div>
        </div>
    );
}
