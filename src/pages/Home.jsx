import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../redux/slices/pizzaSlice";

import { Categories } from "../Components/Categories";
import { Sort } from "../Components/Sort";
import { PizzaBlock } from "../Components/PizzaBlock";
import { ErrorData } from "../Components/ErrorDataBlock/ErrorData";
import { PizzaSkeleton } from "../Components/PizzaBlock/PizzaSkeleton";

export function Home() {
    const { categoriesID, searchValue, sort } = useSelector(
        (state) => state.filter
    );
    const { pizzasItems, status } = useSelector((state) => state.pizza);
    const dispatch = useDispatch();

    const filteredPizza = pizzasItems.filter((items) => {
        return items.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    const categories = categoriesID > 0 ? `category=${categoriesID}` : "";
    const sorts = sort.description;
    const sortOrder = sort.sortOrder;
    const search = searchValue ? `&search=${searchValue}` : "";

    useEffect(() => {
        dispatch(fetchItems({ categories, sorts, sortOrder, search }));
        window.scrollTo(0, 0);
    }, [categoriesID, sort, searchValue]);

    if (status === "error") {
        return <ErrorData />;
    }

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
                {status === "loading"
                    ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />)
                    : filteredPizza.map((items) => (
                          <PizzaBlock key={items.id} {...items} />
                      ))}
            </div>
        </div>
    );
}
