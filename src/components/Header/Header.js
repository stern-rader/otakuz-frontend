
import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarBrand ,MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav, Button , NavDropdown} from 'react-bootstrap';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
import logo from './logo3.png';

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
    // localStorage.setItem('image' , JSON.stringify(reader.result));
    reader.onloadend = () => {
      this.setState({ PreviewImage: reader.result });
    };
    reader.readAsDataURL(selected);
  }

  // componentDidMount() {
  //   this.setState({PreviewImage:JSON.parse(localStorage.getItem('image'))});
  //   console.log(localStorage.getItem('image'));
  // }
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
    // console.log('the link in this page' ,window.location.href );
    const { isAuthenticated, loginWithRedirect, logout } = this.props.auth0;
    return (
      <div>
        <header>

          <Router>
            {/* <img src={logo} alt="" /> */}
            <MDBNavbar color="black" fixed="top" dark expand="md" scrolling transparent>
              <a href='/' >
                <MDBNavbarBrand >
                  <img src={logo} alt="" id='logoSite' />
                </MDBNavbarBrand>
              </a>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav LEFT>
                  {/* <MDBNavItem >
                    <strong><img src={logo} alt="" id='logoSite' /></strong>
                    {/* <Nav.Link href={`${process.env.REACT_APP__HOME_URL}`} >Home</Nav.Link>

                  </MDBNavItem> */} */}
                  <MDBNavItem id='afterLogo'>
                    <Nav.Link href={`${process.env.REACT_APP__HOME_URL}`} >Home</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    {/* <Nav.Link href="#features">Watch</Nav.Link> */}
                    <NavDropdown title="Watch" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="https://www.animelab.com/">animelab</NavDropdown.Item>
                      <NavDropdown.Item href="https://animetake.tv/">animetake</NavDropdown.Item>
                      <NavDropdown.Item href="https://animedia.netlify.app/">animedia</NavDropdown.Item>
                    </NavDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    {isAuthenticated &&

                      <>
                        <Nav.Link href={`${process.env.REACT_APP__HOME_URL}/profile`} >Profile</Nav.Link>
                      </>

                    }
                  </MDBNavItem>
                  <MDBNavItem>
                    <Nav.Link href={`${process.env.REACT_APP__HOME_URL}/aboutus#aus`}>About Us</Nav.Link>
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
                    <p>“Don’t give up, there’s no shame in falling down! True shame is to not stand up again!”<br></br>- Shintaro Midorima (Kuroko No Basket)</p>
                  </div>
                </div>
              </MDBMask>
            </MDBView>
            :
            <MDBView src={this.state.panelSrc} style={{ height: '100vh' }}>
              <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
                <div id='textContainer'>
                  <div id="text">
                    <p>“Don’t give up, there’s no shame in falling down! True shame is to not stand up again!”<br></br>- Shintaro Midorima (Kuroko No Basket)</p>
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


