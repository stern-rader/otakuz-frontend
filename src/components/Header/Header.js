// import React, { Component } from 'react';
// // auth library
// import { withAuth0 } from '@auth0/auth0-react';

// //bootstrap components
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Form, Nav, Button } from 'react-bootstrap';
// //css files
// import './header.css';

// export class Header extends Component {
//   render() {
//     const { isAuthenticated, loginWithRedirect, logout } = this.props.auth0;


//     return (
//       <>
//         <Navbar bg="dark" variant="dark">
//           <Navbar.Brand href="#home">Otakuz</Navbar.Brand>
//           <Nav className="mr-auto" >
//             <Nav.Link href="http://localhost:3000">Home</Nav.Link>
//             <Nav.Link href="#features">Watch</Nav.Link>
//             {isAuthenticated &&
//             <Nav.Link href="http://localhost:3000/profile">Profile</Nav.Link>
//             }
//             <Nav.Link href="#pricing">About US</Nav.Link>
//           </Nav>
//           <Form inline>
//             {!isAuthenticated &&
//               <Button variant='outline-primary' id='logIn' onClick={loginWithRedirect} >Log In</Button>
//             }
//             {isAuthenticated &&
//               <Button variant='outline-primary' id='logOut' onClick={() => {
//                 logout({ returnTo: window.location.origin });
//               }}
//               > Log Out</Button>
//             }
//           </Form>
//         </Navbar>

//       </>
//     );
//   }
// }

// export default withAuth0(Header);


import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Nav , Button} from 'react-bootstrap';

//  auth library
import { withAuth0 } from '@auth0/auth0-react';
// //css files
import './header.css';

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const { isAuthenticated, loginWithRedirect, logout } = this.props.auth0;
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="black" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>Otakuz</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <Nav.Link href="http://localhost:3000">Home</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Nav.Link href="#features">Watch</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Nav.Link href="http://localhost:3000/profile">Profile</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    {!isAuthenticated &&
              <Button variant='outline-primary' id='logIn' onClick={loginWithRedirect} >Log In</Button>
                    }
                    {isAuthenticated &&
              <Button variant='outline-primary' id='logOut' onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
              > Log Out</Button>
                    }
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src="https://fsa.zobj.net/crop.php?r=z5JoMdZYUlRz3L1YAUuM8ywdjG6XkA2hmhI7ysxwTye68piGDbD9rFYJYzRfFDZrZbgewaJbQB4iuS5GUZkRERTvY8vE7DWMJofrqQWjakknVOGSHenr_dj0iJqdOlyMwamUiTUAi0NvAZC7" >
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <div id='test'>
                <div id="text">
                  <h2>This Navbar is fixed</h2>
                  <h5>It will always stay visible on the top, even when you scroll down</h5>
                  <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
                  <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
                </div>
              </div>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default withAuth0(FullPageIntroWithFixedTransparentNavbar);
