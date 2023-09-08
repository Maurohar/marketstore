import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/*Luego que creamos nuestro componente Routes, con sus respectivas rutas, debemos injertar Link de react router dom las rutas ya definidas.*/

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to='/home'>myEcommerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to='/category'>Category</Link>
                        <Link to='/jewelery'>Jewelery</Link>
                        <Link to='/electronics'>electronics</Link>
                        <Link to='/menclothing'>men's clothing</Link>
                        <Link to='/womenclothing'>women's clothing</Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;

