import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchItemsInfo } from "../../redux/slices/pizzaInfoSlice";
import { selectPizzaInfo } from "../../redux/slices/pizzaInfoSlice";
import { Link, useParams, useNavigate } from "react-router-dom";

import { PizzaSkeleton } from "../PizzaBlock/PizzaSkeleton";

import styles from "./PizzaInfo.module.scss";

export const PizzaInfo = () => {
    const { itemsInfo, status } = useSelector(selectPizzaInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchItemsInfo({ id }));
    }, [id]);

    if (!itemsInfo) {
        navigate("/");
        return <>Загрузка...</>;
    }

    return (
        <div className={styles.container}>
            {status === "loading" ? (
                [...new Array(1)].map((_, i) => <PizzaSkeleton key={i} />)
            ) : (
                <div className={styles.infoBlock}>
                    <div className="pizza-block-wrapper">
                        <div className="pizza-block">
                            <img
                                className="pizza-block__image"
                                src={itemsInfo.imageUrl}
                                alt="Pizza"
                            />
                            <h4 className="pizza-block__title">
                                {itemsInfo.title}
                            </h4>
                            <div className="pizza-block__price">
                                от {itemsInfo.price} ₽
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerDescription}>
                        <h2>Описание</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. A, aliquam libero. Nulla ad, quos nostrum
                            inventore eius omnis accusantium! Optio debitis id
                            nisi pariatur quis, earum fugit et cupiditate est?
                        </p>
                    </div>
                </div>
            )}
            <Link to="/">
                <div>
                    <button className={styles.home}>На главную</button>
                </div>
            </Link>
        </div>
    );
};
