import React, { useState } from "react";

export function Categories() {
    const [activeCategories, setActiveCategories] = useState(0);

    const categories = [
        "Все",
        "Мясные",
        "Вегатарианские",
        "Гриль",
        "Острые",
        "Закрытые",
    ];

    return (
        <div className="content__top">
            <div className="categories">
                <ul>
                    {categories.map((title, index) => (
                        <li
                            key={index}
                            onClick={() => setActiveCategories(index)}
                            className={
                                activeCategories === index ? "active" : ""
                            }
                        >
                            {title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
