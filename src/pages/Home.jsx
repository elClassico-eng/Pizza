import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setCategoriesID } from "../redux/slices/filterSlice";

import { Categories } from "../Components/Categories";
import { Sort } from "../Components/Sort";
import { PizzaBlock } from "../Components/PizzaBlock";
import { PizzaSkeleton } from "../Components/PizzaBlock/PizzaSkeleton";

import { RootContext } from "../App";

export function Home() {
    const category = useSelector((state) => state.filter.categoriesID);
    const dispatch = useDispatch();

    const [pizzasItems, setPizzasItems] = useState([]);
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

    const categories = category > 0 ? `category=${category}` : "";
    const sorts = sortItems.description;
    const sortOrder = sortItems.sortOrder;
    const searchValue = searchItems ? `&search=${searchItems}` : "";

    const onClickCategory = (id) => {
        dispatch(setCategoriesID(id));
    };

    const onClickSort = (obj) => {
        setSortItems(obj);
    };

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(
                    `https://657c99bc853beeefdb99afd3.mockapi.io/PizzaItems?${categories}&sortBy=${sorts}&order=${sortOrder}${searchValue}`
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
    }, [category, sortItems, searchItems]);
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    category={category}
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
