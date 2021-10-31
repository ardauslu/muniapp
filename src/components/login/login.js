import { useState } from "react"
import { Form, Button } from "react-bootstrap"

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function login() {
        let userData = localStorage.getItem("user@" + email)
        if (userData) {
          let user = JSON.parse(userData)
    
          if (user.password === password) {
              props.onLogin(user)
          }
        } else {
             props.onLoginFailed(false)     
        }
      }

    return <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }} />
        </Form.Group>
        <Button variant="primary" onClick={login}>
            Login
        </Button>
    </Form>
}

export default Login