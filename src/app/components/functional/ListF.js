import React from "react";

export default function ListF(
    {
        items = [],
        ariaLabel = "",
        renderItem,
        className = "",
        itemClassName = ""
    }) {

    return (
        <ul aria-label={ariaLabel} className={className}>
            {items?.map((item) => (
                <li className={itemClassName} key={item.id}>
                    {renderItem && renderItem(item)}
                    {!renderItem && item.text}
                </li>
            ))}
        </ul>
    )
}