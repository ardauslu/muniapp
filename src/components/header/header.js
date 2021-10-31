import { Container, Navbar ,InputGroup,FormControl} from "react-bootstrap"


function Header({ user }) {

    return <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="justify-content-start">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    MUNI APP
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-center">
                <InputGroup>
                <InputGroup.Text>Search</InputGroup.Text>
                 <FormControl aria-label="With textarea" />
                 </InputGroup>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{fontWeight:'bolder'}}>
                        Signed in as: {user.name + ' ' + user.surname} {' '}
                    </Navbar.Text>
                    <Navbar.Text>
                        {user.total.USD} $
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default Header