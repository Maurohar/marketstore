import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='container'>
                    <Navbar.Brand to='/home'>myEcommerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to='/jewelery'>Jewelry</Link>
                        <Link to='/electronics'>electronics</Link>
                        <Link to="/men's clothing">men's clothing</Link>
                        <Link to="/women's clothing">women's clothing</Link>
                        <Link to="/registrarse">Registrarse</Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </header>
    );
}

export default NavBar;

