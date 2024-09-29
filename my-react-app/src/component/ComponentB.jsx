import ComponentC from "./ComponentC";

function ComponentB() {
    return(
        <div className="component">
            <h1>Component A</h1>
            <ComponentC />
        </div>
    );
}

export default ComponentB