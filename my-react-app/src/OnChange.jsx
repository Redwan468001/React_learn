import React, {useState} from 'react'

function OnChange() {
    const [name, setName] = useState("Guests")
    const [quantity, setQuatity] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState()
    const [delivery, setDelivery] = useState()


    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleQuantityChange(event) {
        setQuatity(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }
    
    function handleDelivery(event){
        setDelivery(event.target.value)
    }

    return(
        <>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Write delivery address' name="" id=""></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select a option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Gift Card">Gift Card</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                checked={delivery === "Pick Up"}
                onChange={handleDelivery}
                /> Pick up
            </label>

            <label>
                <input type="radio" value="Delivery"
                checked={delivery === "Delivery"}
                onChange={handleDelivery}
                /> Delivery
            </label>
            <p>Delivery method: {delivery}</p>
        </>
    );
}

export default OnChange 