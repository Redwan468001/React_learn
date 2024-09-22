import profileImg from './assets/img.jpg'

function Cart() {
    return(
        <div className='cart'>
            <img className='cart-img' src={profileImg} alt="Profile Picture" />
            <h1>Redwan</h1>
            <p>This is Redwan Shuvo</p>
        </div>
    );
}

export default Cart