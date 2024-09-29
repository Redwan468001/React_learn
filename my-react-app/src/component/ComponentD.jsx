import { useContext } from "react";
import { userContext } from "./ComponentA.jsx"

function ComponentD() {

    const user = useContext(userContext)

    return(
        <div className="component">
            <h1>Component A</h1>
            <h2>`Bye {user}`</h2>
        </div>
    );
}

export default ComponentD