import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"

function Register(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    function signUp() {
        let user = {
            email: email,
            password: password,
            name: name,
            surname: surname,
            wallet: {USD: 10000}
        }
        localStorage.setItem("user@" + email, JSON.stringify(user))
        props.onLogin(user)
    }

    return <Form style={{ width: '50%', justifySelf: 'center' }}>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formBasicEmail">
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

            <Form.Group as={Col} controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }} />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Surname</Form.Label>
                <Form.Control type="surname" placeholder="Enter surname"
                    value={surname}
                    onChange={(e) => {
                        setSurname(e.target.value)
                    }} />
            </Form.Group>
        </Row>
        <Button variant="primary" onClick={signUp}>
            Sign Up
        </Button>
    </Form>
}

export default Register