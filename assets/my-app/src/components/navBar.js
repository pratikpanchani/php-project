import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

class navBar extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">PHP Project - Pratik Panchani</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/upload">Upload</Nav.Link>
                        <Nav.Link href="/players">Players</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default navBar;