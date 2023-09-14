import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/*Luego que creamos nuestro componente Routes, con sus respectivas rutas, debemos injertar Link de react router dom las rutas ya definidas.*/

function NavBar({cart}) {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to='/home'>myEcommerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to='/category'>Category</Link>
                        <Link to='/jewelery'>Jewelery</Link>
                        <Link to='/electronics'>electronics</Link>
                        <Link to="/men's clothing">men's clothing</Link>
                        <Link to="/women's clothing">women's clothing</Link>
                    </Nav>
                    <CartWidget cart={cart} />
                </Container>
            </Navbar>
        </header>
    );
}

export default NavBar;

