import React from "react";

import { categories } from "../data/DataComponents";

export function Categories({ categoriesID, onClickCategory }) {
    return (
        <div className="categories">
            <ul>
                {categories.map((title, index) => (
                    <li
                        key={index}
                        onClick={() => onClickCategory(index)}
                        className={categoriesID === index ? "active" : ""}
                    >
                        {title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
