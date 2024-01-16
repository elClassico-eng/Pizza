import React from "react";

import { categories } from "../data/DataComponents";

export function Categories({ category, onClickCategory }) {
    return (
        <div className="categories">
            <ul>
                {categories.map((title, index) => (
                    <li
                        key={index}
                        onClick={() => onClickCategory(index)}
                        className={category === index ? "active" : ""}
                    >
                        {title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
