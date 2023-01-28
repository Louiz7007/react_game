import {Title} from "../components/Title";
import {SimpleButton} from "../components/SimpleButton";
import {root} from "../index";
import React from "react";
import {Welcome} from "./Welcome";
import '../index.css';

export function Game() {
    const clickEvent = () => {
        root.render(
            <React.StrictMode>
                <Welcome/>
            </React.StrictMode>
        );
    }
    return (
        <div>
            <Title text={'Game'}/>
            <SimpleButton text={'Go Back'} clickEvent={clickEvent}/>
        </div>
    )
}