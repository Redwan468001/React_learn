import React, {useState} from "react";

function Counter() {

    const [count, setcount] = useState(0);

    const increment = () => {
        setcount(count + 1);
    }

    const decrement = () => {
        setcount(count - 1);
    }

    const reset = () => {
        setcount(0);
    }

    return(
        <div>
            <p>{count}</p>
            
            <button onClick={increment}>Increment</button>

            <button onClick={reset}>Reset</button>

            <button onClick={decrement}>Decrement</button>

        </div>
    );

}

export default Counter