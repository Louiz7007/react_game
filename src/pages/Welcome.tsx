import {Title} from "../components/Title";
import {SimpleButton} from "../components/SimpleButton";
import React from "react";
import {root} from "../index";
import {Game} from "./Game";
import '../index.css';

export function Welcome() {

    const clickEvent = () => {
        root.render(
            <React.StrictMode>
                <Game />
            </React.StrictMode>
        );
    }
    return (
        <div>
            <Title text={'Willkommen'}/>
            <SimpleButton text={'Start'} clickEvent={clickEvent}/>
        </div>
    )
}