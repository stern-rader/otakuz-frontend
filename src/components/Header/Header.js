import React, { Component } from 'react';

//bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Form , Nav , Button} from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="outline-info" style={{marginLeft:'50rem'}}>Log In</Button>
          </Form>
        </Navbar>

      </>
    );
  }
}

export default Header;
