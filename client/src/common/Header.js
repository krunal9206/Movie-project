import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
    const { pathname } = useLocation();
    return (
        <header>
            <Navbar bg="dark" expand="lg">
                <Container>
                    {pathname && pathname.includes("movie-detail") ? <Link to="/" className='navbar-brand'><FontAwesomeIcon icon={faArrowLeft} /> Detail</Link> : <Link to="/" className='navbar-brand'>Pop Movies</Link>}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" ><FontAwesomeIcon icon={faEllipsisVertical} /></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" className='wh-color'>Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header