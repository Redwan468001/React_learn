
function Button() {

    const image = "./src/assets/img.jpg"
    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img onClick={(e) => handleClick(e)} src={image} alt="" />
    );

}

export default Button

