import PropsTypes from 'prop-types'
function UserGreeting(props) {

    const welcome_msg = <h2 className="welcome_msg">Welcome {props.username}</h2>

    const loggedIn_msg = <h2 className="loggedIn-msg">Please logged in to continue</h2>

    return (
        props.isLoggedIn ?  welcome_msg : loggedIn_msg
    );
}

UserGreeting.PropsTypes = {
    isLoggedIn: props.bool,
    username: props.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting