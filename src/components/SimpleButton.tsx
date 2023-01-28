import './styles/SimpleButton.style.css';
import React from "react";

export function SimpleButton(props: {text: string, clickEvent: React.MouseEventHandler<HTMLButtonElement> | undefined}) {

    return (
        <button onClick={props.clickEvent}>{props.text}</button>
    )
}