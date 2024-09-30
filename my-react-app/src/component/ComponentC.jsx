import { useContext, useState } from "react";
import ComponentD from "./ComponentD";
import { userContext } from "./ComponentA";

function ComponentC() {

    const user = useContext(userContext)

    return(
        <div className="component">
            <h1>Component C</h1>
            <h2>`Thank you {user}`</h2>
            <ComponentD />
        </div>
    );
}

export default ComponentC