import React, {useState} from "react";

function FoodModel() {

    const [foods, setFoods] = useState(["apple", "Banana", "Orange"])

    function handleAddFood(index){
        const newFood = document.getElementById("addFood").value
        document.getElementById("addFood").value = ""

        setFoods(f => [...f, newFood])
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((element, i) => i !== index));
    }

    return(
        <div>
            <h1>List of foods</h1>
            {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
            )}
            <input type="text" id="addFood" placeholder="write food name..."/>
            <button onClick={handleAddFood}>Add food</button>
        </div>
    );

}

export default FoodModel