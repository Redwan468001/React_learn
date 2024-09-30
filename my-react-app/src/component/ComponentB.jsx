import { useContext } from "react";
import ComponentC from "./ComponentC";
import { userContext } from "./ComponentA";

function ComponentB() {

    const user = useContext(userContext);

    return(
        <div className="component">
            <h1>Component A</h1>
            <h2>`Could you please do me a fevor {user}`</h2>
            <ComponentC />
        </div>
    );
}

export default ComponentB