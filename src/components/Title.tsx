import './styles/Title.style.css';
import {useState} from "react";

export function Title(props: {text: string}) {

    return (
        <h1>{props.text}</h1>
    )
}