import React, { Component } from 'react';
// auth library
import { withAuth0 } from '@auth0/auth0-react';

//bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Nav, Button } from 'react-bootstrap';
//css files
import './header.css';

export class Header extends Component {
  render() {
    const { isAuthenticated, loginWithRedirect, logout } = this.props.auth0;


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
            {!isAuthenticated &&
              <Button variant='outline-primary' id='logIn' onClick={loginWithRedirect} >Log In</Button>
            }
            {isAuthenticated &&
              <Button variant='outline-primary' id='logOut' onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
              > Log Out</Button>
            }
          </Form>
        </Navbar>

      </>
    );
  }
}

export default withAuth0(Header);
