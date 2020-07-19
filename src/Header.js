import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

class Header extends React.Component
{
    constructor(props){
        super(props);
        this.state = {};
    }

    render=()=>{
        return (
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Hangman App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    
                    </Nav>
                   
                </Navbar.Collapse>
                </Navbar>
        )
    }
}
export default Header;