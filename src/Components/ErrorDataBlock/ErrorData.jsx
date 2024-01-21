import React from "react";
import style from "./ErrorData.module.scss";

import loadingImg from "./loading.gif";

export const ErrorData = () => {
    return (
        <div className={style.root}>
            <img src={loadingImg} alt="" />
            <h2 style={{ fontSize: "48px" }}>Не удалось получить данные </h2>
            <p style={{ fontSize: "24px" }}>
                Попробуйте перезагрузить страницу или вернитесь чуть позднее
            </p>
        </div>
    );
};
