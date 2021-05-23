import React, { Component } from 'react';

//mdbreact components
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
//css files
import './footer.css';

export class Test extends Component {
  render() {
    return (
      <div style={{ marginTop: '25rem' }}>
        <MDBFooter id="footer" color="indigo" className="font-small lighten-3 pt-4 mt-4" >
          <MDBContainer className="text-center text-md-left" >
            <MDBRow className="my-4">
              <MDBCol md="4" lg="4">
                <h5 className="text-uppercase mb-4 font-weight-bold">
                  OTAKUZ
                </h5>
                <p>
                  According to the regular users, our website is the best in terms of design, ease of use and content that you will like.

                </p>
                <p>
                  Therefore, do not hesitate to share the website with your friends to have fun and excitement..{' '}
                </p>
              </MDBCol>
              <hr className="clearfix w-100 d-md-none" />
              <MDBCol md="2" lg="2" className="ml-auto">
                <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
                <ul className="list-unstyled">
                  <p>
                    <a href="#!">PROJECTS</a>
                  </p>
                  <p>
                    <a href="#!">ABOUT US</a>
                  </p>
                  <p>
                    <a href="#!">BLOG</a>
                  </p>
                  <p>
                    <a href="#!">AWARDS</a>
                  </p>
                </ul>
              </MDBCol>
              <hr className="clearfix w-100 d-md-none" />
              <MDBCol md="5" lg="3">
                <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
                <p>
                  <i className="fa fa-home mr-3" /> Amman, Jordan
                </p>
                <p>
                  <i className="fa fa-envelope mr-3" /> info@example.com
                </p>
                <p>
                  <i className="fa fa-phone mr-3" /> + 269 111 567 88
                </p>
                <p>
                  <i className="fa fa-print mr-3" /> + 01 500 567 89
                </p>
              </MDBCol>
              <hr className="clearfix w-100 d-md-none" />
              <MDBCol md="2" lg="2" className="text-center">
                <h5 className="text-uppercase mb-4 font-weight-bold">
                  Follow us
                </h5>
                <div className="mt-2 ">
                  <a type="button" className="btn-floating btn-small btn-fb" href="#facebook">
                    <i id="facebook" className="fab fa-facebook-f" />
                  </a>
                  <a type="button" className="btn-floating btn-small btn-tw" href="#twitter">
                    <i id="twitter" className="fab fa-twitter" />
                  </a>
                  <a type="button" className="btn-floating btn-small btn-gplus" href="#google">
                    <i id="google" className="fab fa-google-plus" />
                  </a>
                  <a type="button" className="btn-floating btn-small btn-dribbble" href="#github">
                    <i id="github" className="fab fa-github" />
                  </a>
                </div>
              </MDBCol>
              <hr className="clearfix w-100 d-md-none" />
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} {' '}
              <a href="https://www.MDBootstrap.com"> Otakuz </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>

    );
  }
}

export default Test;
