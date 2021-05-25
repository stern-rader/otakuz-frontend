
import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
// import logo from './logo.png';

//  auth library
import { withAuth0 } from '@auth0/auth0-react';
// //css files
import '../Header/header.css';
import Modal from './Modal';
import axios from 'axios';

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      panelSrc: 'https://fsa.zobj.net/crop.php?r=z5JoMdZYUlRz3L1YAUuM8ywdjG6XkA2hmhI7ysxwTye68piGDbD9rFYJYzRfFDZrZbgewaJbQB4iuS5GUZkRERTvY8vE7DWMJofrqQWjakknVOGSHenr_dj0iJqdOlyMwamUiTUAi0NvAZC7',
      modal8: false,
      modal9: false,
      fileData: '',
      PreviewImage: '',
      modal: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  // uploudaing new panel from the user
  addNewPanel = (e) => {
    const selected = e.target.files[0];
    console.log('selected image', selected);
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ PreviewImage: reader.result });
    };
    reader.readAsDataURL(selected);
  }

  // saving the new panel from the user in the page
  saveNewPanel = (e) => {
    e.preventDefault();
    if (this.state.PreviewImage !== null) {
      this.setState({ panelSrc: this.state.PreviewImage });
    }
  }

  // saving the new panel from the user in the data base
  savePanelInsideDB = async (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    const reqData = {
      email: user.email,
      Panel: this.state.panelSrc
    };
    const myPanel = await axios.post(`${process.env.REACT_APP__BACKEND_URL}/otakuzUser`, reqData);
    this.setState({ panelSrc: myPanel.data });
  }

  // rendering the modal element
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { isAuthenticated, loginWithRedirect, logout } = this.props.auth0;
    return (
      <div>
        <header>

          <Router>
            {/* <img src={logo} alt="" /> */}
            <MDBNavbar color="black" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand >
                <strong>Otakuz</strong>
                {/* <img src={logo} alt="" /> */}
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem >
                    <Nav.Link href={`${process.env.REACT_APP__HOME_URL}`} >Home</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Nav.Link href="#features">Watch</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    {isAuthenticated &&

                      <>
                        <Nav.Link href={`${process.env.REACT_APP__HOME_URL}/profile`} >Profile</Nav.Link>
                      </>

                    }
                  </MDBNavItem>
                  <MDBNavItem>
                    <Nav.Link href={`${process.env.REACT_APP__HOME_URL}/aboutus`}>About Us</Nav.Link>
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
          {window.location.href === `${process.env.REACT_APP__HOME_URL}/profile` ?
            <MDBView id='panel' src={this.state.panelSrc} style={{ height: '100vh' }} title='Double click to Update Your Panel' onDoubleClick={this.toggle}>
              <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
                <div id='textContainer'>
                  <div id="text">
                    <h2>Otakuz</h2>
                    <p>Is a free anime website featuring some of the top animes such as Naruto, Attack on Titan, Yuri on Ice, etc.<br></br> It has a simple interface and hosts a massive collection of Asian dramas, anime.</p>
                  </div>
                </div>
              </MDBMask>
            </MDBView>
            :
            <MDBView src={this.state.panelSrc} style={{ height: '100vh' }}>
              <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
                <div id='textContainer'>
                  <div id="text">
                    <h2>Otakuz</h2>
                    <p>Is a free anime website featuring some of the top animes such as Naruto, Attack on Titan, Yuri on Ice, etc.<br></br> It has a simple interface and hosts a massive collection of Asian dramas, anime.</p>
                  </div>
                </div>
              </MDBMask>
            </MDBView>}
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify"></p>
            {isAuthenticated &&
              <Modal addNewPanel={this.addNewPanel} saveNewPanel={this.saveNewPanel}
                modal={this.state.modal}
                toggle={this.toggle}
              />
            }
          </MDBContainer>
        </main>
      </div >
    );
  }
}

export default withAuth0(FullPageIntroWithFixedTransparentNavbar);


