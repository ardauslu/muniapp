import { useState } from "react";
import Login from "./login";
import Register from "./register";


export default function LoginContainer(props) {
    const [showLogin, setShowLogin] = useState(true)

    return showLogin ? <Login onLogin={props.onLogin} onLoginFailed={setShowLogin} /> : <Register onLogin={props.onLogin} />
}
