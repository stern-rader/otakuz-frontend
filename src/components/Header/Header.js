import React, { Component } from 'react';

//bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Form , Nav , Button} from 'react-bootstrap';
//css files
import './header.css';

export class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Otakuz</Navbar.Brand>
          <Nav className="mr-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Watch</Nav.Link>
            <Nav.Link href="#pricing">About US</Nav.Link>
          </Nav>
          <Form inline>
            <Button variant='outline-primary' id='logIn' >Log In</Button>
          </Form>
        </Navbar>

      </>
    );
  }
}

export default Header;
