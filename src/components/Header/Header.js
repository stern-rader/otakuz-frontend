import React from 'react';
import { Link } from 'react-router-dom';
//mdreact components
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer, MDBMask, MDBView } from 'mdbreact';
//bootstrap components
import {Button} from 'react-bootstrap';
//  auth library
import { withAuth0 } from '@auth0/auth0-react';
// //css files
import '../Header/header.css';
import Modal from './Modal';

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      panelSrc:'https://fsa.zobj.net/crop.php?r=z5JoMdZYUlRz3L1YAUuM8ywdjG6XkA2hmhI7ysxwTye68piGDbD9rFYJYzRfFDZrZbgewaJbQB4iuS5GUZkRERTvY8vE7DWMJofrqQWjakknVOGSHenr_dj0iJqdOlyMwamUiTUAi0NvAZC7',
      modal8: false,
      modal9: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  toggle = nr => () => {
    let modalNumber = 'modal' + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  addNewPanel= (e) =>{
    e.preventDefault();
    this.setState({panelSrc:e.target.value});
  }
  saveNewPanel = (e)=>{
    e.preventDefault();
  }
  render() {
    const { isAuthenticated, loginWithRedirect, logout } = this.props.auth0;
    return (
      <div>
        <header>
          <MDBNavbar color="black" fixed="top" dark expand="md" scrolling transparent>
            <MDBNavbarBrand href="/">
              <strong>Otakuz</strong>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem >
                  {/* <Nav.Link href={`${process.env.REACT_APP__HOME_URL}`} >Home</Nav.Link> */}
                  <Link to={{pathname:'/'}}>Home</Link>
                </MDBNavItem>
                <MDBNavItem>
                  {/* <Nav.Link href="#features">Watch</Nav.Link> */}
                  <Link to={{pathname:'/'}}>Watch</Link>
                </MDBNavItem>
                <MDBNavItem>
                  {isAuthenticated &&
                    <>
                      {/* <Nav.Link href={`${process.env.REACT_APP__HOME_URL}/profile`} >Profile</Nav.Link> */}
                      <Link to={{pathname:'/profile'}}>Profile</Link>
                    </>
                  }
                </MDBNavItem>
                <MDBNavItem>
                  {/* <Nav.Link href={`${process.env.REACT_APP__HOME_URL}/aboutus`}>About Us</Nav.Link> */}
                  <Link to={{pathname:'/aboutus'}}>About Us</Link>
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
          <MDBView src={this.state.panelSrc} style={{height:'100vh'}}>
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <div id='textContainer'>
                <div id="text">
                  <h2>Lorem Text</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
                    Excepteur sint occaecat cupidatat non proident, <br></br>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify"></p>
            <Modal addNewPanel={this.addNewPanel} saveNewPanel={this.saveNewPanel}/>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default withAuth0(FullPageIntroWithFixedTransparentNavbar);

