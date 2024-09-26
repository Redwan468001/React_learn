import { useState } from "react";

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF")

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }

    return(
        <div>
            <h1>Pick a color</h1>
            <div className="back_color" style={{backgroundColor:color}}>
                <p>Selected Color: {color}</p> 
            </div>
            <div>
                <p>Choose a color</p>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
        </div>
    );
}

export default ColorPicker