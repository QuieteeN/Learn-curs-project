import React from "react";

/* eslint-disable */
interface IToggleContentProps {
    title: string;
    text: string;
}
/* eslint-enable */

export function ToggleContent({ title, text }: IToggleContentProps) {
    return (
        <>
            <h2>{title}</h2>
            <p>{text}</p>
        </>
    );
}
