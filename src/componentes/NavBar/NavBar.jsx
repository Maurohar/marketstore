import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to='/home'>myEcommerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to='/category'>Category</Nav.Link>
                        <Nav.Link to='/jewelery'>Jewelery</Nav.Link>
                        <Nav.Link to='/electronics'>electronics</Nav.Link>
                        <Nav.Link to='/menclothing'>men's clothing</Nav.Link>
                        <Nav.Link to='/womenclothing'>women's clothing</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;

