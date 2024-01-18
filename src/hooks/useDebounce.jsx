import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
    const [debaunceValue, setDebaunceValue] = useState();

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebaunceValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return debaunceValue;
};
