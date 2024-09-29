import React, {useState, useEffect} from "react";

function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("Add event listener")

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("Remove event listener")
        }
    }, []);

    useEffect(() => {
        document.title = `${width} X ${height}`
    }, [width, height]);
    

    return(
        <div>
            <p>Window width: {width}</p>
            <p>Window height: {height}</p>
        </div>
    );

}

export default MyComponent