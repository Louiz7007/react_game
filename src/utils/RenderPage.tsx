import React from "react";
import {root} from "../index";

export function RenderPage(element: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) {
    root.render(
        <React.StrictMode>
            {element}
        </React.StrictMode>
    );
}