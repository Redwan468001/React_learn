import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const userContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Redwan")

    return(
        <div className="component">
            <h1>Component A</h1>
            <h2>`Hello {user}`</h2>
            <userContext.Provider value={user}>
                <ComponentB />
            </userContext.Provider>
        </div>
    );
}

export default ComponentA