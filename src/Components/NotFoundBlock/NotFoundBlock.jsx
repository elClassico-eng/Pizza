import React from "react";

import styles from "../NotFoundBlock/NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <div>
                <h1>
                    <span>😕</span>
                    <br />
                    Not Found
                </h1>
                <p className={styles.descr}>
                    К сожалению, данная страница не найдена, попробуйте позже!
                </p>
            </div>
            <button className={styles.btnHome}>Назад</button>
        </div>
    );
};
