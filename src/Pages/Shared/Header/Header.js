import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../../hooks/useAuth';
import { Button } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar fixed="top" className="text-white" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="fw-bold" href="#home">
                        {/* <img
                            alt=""
                            // src={ }
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '} */}
                        Tour Mate</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="nav" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/addService">Add Service</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/myOrders">My Oders</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/manageOrders">Manage Orders</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/about">About</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="primary">Logout</Button> :
                            <Nav.Link className="nav" as={Link} to="/login">Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;