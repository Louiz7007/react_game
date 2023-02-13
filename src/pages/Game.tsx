import {Title} from "../components/Title";
import {root} from "../index";
import React from "react";
import {Welcome} from "./Welcome";
import {GameCard} from "../components/GameCard";

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
            <GameCard/>
        </div>
    )
}