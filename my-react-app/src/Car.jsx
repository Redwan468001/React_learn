import React, {useState} from "react";

// function CarFav() {
//     const [car, setCar] = useState({year: 2024, make: "Ford", model:"Musterd"})

//     function handleYearChange(event) {
//         setCar(c => ({...c, year: event.target.value }))
//     }

//     function handleMakeChange(event) {
//         setCar(c => ({...c, make: event.target.value}))
//     }

//     function handleModelChange(event){
//         setCar(c => ({...c, model: event.target.value}))
//     }

//     return(
//         <div>
//             <p>My favorite car is {car.year} {car.make} {car.model}</p>
//             <input type="number" value={car.year} onChange={handleYearChange} />
//             <input type="text" value={car.make} onChange={handleMakeChange} />
//             <input type="text" value={car.model} onChange={handleModelChange} />
//         </div>
//     );
// }

function MyCar() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState();
    const [carModel, setCarModel] = useState();

    function handleAddCar(event) {
        const newCar = {year: carYear, make: carMake, model: carModel}

        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    function removeCar(index) {
        setCars(c => c.filter((element, i) => i !== index));
    }

    function handleCarYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleCarMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleCarModelChange(event) {
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h1>List of Car Objects</h1>
            <ul>
                {cars.map((car, index) => 
                <li key={index} onClick={() => removeCar(index)}>{car.year} - {car.make} - {car.model}</li>
                )}
            </ul>

            <input type="number" value={carYear} onChange={handleCarYearChange} /><br/>
            <input type="text" value={carMake} onChange={handleCarMakeChange} placeholder="write car make.." /><br/>
            <input type="text" value={carModel} onChange={handleCarModelChange} placeholder="write car model.." /><br/>
            <button onClick={handleAddCar}>Add Car</button>

        </div>
    );

}

export default MyCar