import React from "react";
import { Footer } from "../Footer/index";

export function Lista() {
    var Lista = ["Maria", "João"];
    return (
        <div>
            {Lista.map((Item) => (<Footer nome={Item} />))}
        </div>
    );
}
