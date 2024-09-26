import React, {useState} from "react"

function MyComponent() {
    const [name, setName] = useState("Guest");

    const updateName = () => {
        setName("Redwan")
    }

    const [age, setAge] = useState(0);
    const incrementAge = () => {
        setAge(age + 1);
    }

    const [isEmployee, setEmployeed] = useState(false);
    const toggleEmployeeStatus = () => {
        setEmployeed(!isEmployee)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            
            <p>Is employee: {isEmployee ? "Yes" : "No"}</p>
            <button onClick={toggleEmployeeStatus}>Toggle Status</button>
        </div>
    );

}

export default MyComponent

