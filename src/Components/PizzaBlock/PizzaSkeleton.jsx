import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaSkeleton = () => (
    <ContentLoader
        className="pizza-block"
        rtl
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#e8e8e8"
        foregroundColor="#d1d1d1"
    >
        <circle cx="134" cy="134" r="125" />
        <rect x="0" y="296" rx="10" ry="10" width="280" height="23" />
        <rect x="0" y="345" rx="5" ry="5" width="280" height="88" />
        <rect x="0" y="450" rx="5" ry="5" width="95" height="30" />
        <rect x="125" y="450" rx="14" ry="14" width="157" height="40" />
    </ContentLoader>
);
