import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPizzaItems } from "../redux/slices/pizzaSlice";

import axios from "axios";

import { Categories } from "../Components/Categories";
import { Sort } from "../Components/Sort";
import { PizzaBlock } from "../Components/PizzaBlock";
import { PizzaSkeleton } from "../Components/PizzaBlock/PizzaSkeleton";

export function Home() {
    const [loading, setLoading] = useState(true);
    const { categoriesID, searchValue, sort } = useSelector(
        (state) => state.filter
    );
    const { pizzasItems } = useSelector((state) => state.pizza);
    const dispatch = useDispatch();

    const categories = categoriesID > 0 ? `category=${categoriesID}` : "";
    const sorts = sort.description;
    const sortOrder = sort.sortOrder;
    const search = searchValue ? `&search=${searchValue}` : "";

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
    }, [categoriesID, sort, searchValue]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories category={categoriesID} />
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
                    : pizzasItems
                          .filter((items) => {
                              return items.title
                                  .toLowerCase()
                                  .includes(searchValue.toLowerCase());
                          })
                          .map((items) => (
                              <PizzaBlock key={items.id} {...items} />
                          ))}
            </div>
        </div>
    );
}
