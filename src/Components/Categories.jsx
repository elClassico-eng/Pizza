import React from "react";

import { useDispatch } from "react-redux";
import { setCategoriesID } from "../redux/slices/filterSlice";

import { categories } from "../data/DataComponents";

export function Categories({ category }) {
    const dispatch = useDispatch();
    return (
        <div className="categories">
            <ul>
                {categories.map((title, index) => (
                    <li
                        key={index}
                        onClick={() => dispatch(setCategoriesID(index))}
                        className={category === index ? "active" : ""}
                    >
                        {title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
