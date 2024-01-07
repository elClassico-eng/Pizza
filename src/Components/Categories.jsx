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
        <div class="content__top">
            <div class="categories">
                <ul>
                    {categories.map((title, index) => (
                        <li
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
