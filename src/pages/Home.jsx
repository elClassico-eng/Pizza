import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";

import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../redux/slices/filterSlice";
import { setPizzaItems } from "../redux/slices/pizzaSlice";

import { Categories } from "../Components/Categories";
import { Sort } from "../Components/Sort";
import { PizzaBlock } from "../Components/PizzaBlock";
import { PizzaSkeleton } from "../Components/PizzaBlock/PizzaSkeleton";

import { popupList } from "../data/DataComponents";

export function Home() {
    const category = useSelector((state) => state.filter.categoriesID);
    const searchValue = useSelector((state) => state.filter.searchValue);
    const sort = useSelector((state) => state.filter.sort);
    const pizzaItems = useSelector((state) => state.pizza.pizzasItems);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const filteredPizzas = pizzaItems.filter((items) => {
        return items.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    const categories = category > 0 ? `category=${category}` : "";
    const sorts = sort.description;
    const sortOrder = sort.sortOrder;
    const search = searchValue ? `&search=${searchValue}` : "";

    useEffect(() => {
        if (window.location.search) {
            const objPharam = qs.parse(window.location.search.slice(1));
        }
    }, []);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(
                    `https://657c99bc853beeefdb99afd3.mockapi.io/PizzaItems?${categories}&sortBy=${sorts}&order=${sortOrder}${search}`
                );
                dispatch(setPizzaItems(data));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        })();
        window.scrollTo(0, 0);
    }, [category, sort, searchValue]);

    useEffect(() => {
        const strPharams = qs.stringify({
            category,
            description: sort.description,
            sortOrder: sort.sortOrder,
        });
        navigate(`?${strPharams}`);
    }, [category, sort]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories category={category} />
                <Sort sort={sort} />
            </div>
            {searchValue ? (
                <h2 className="content__title">Поиск по "{searchValue}"</h2>
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
