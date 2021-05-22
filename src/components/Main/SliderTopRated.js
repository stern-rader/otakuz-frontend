import React, { Component } from 'react';

//bootstrap components
// import {Carousel} from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export class SliderTopRated extends Component {
  render() {
    return (
      <>
        <footer class="bg-light text-center text-white">
          {/* <!-- Grid container --> */}
          <div class="container p-4 pb-0">
            {/* <!-- Section: Social media --> */}
            <section class="mb-4">
              {/* <!-- Facebook --> */}
              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor:'#3b5998'}}
                href="#!"
                role="button"
              ><i class="fab fa-facebook-f"></i
                ></a>

              {/* <!-- Twitter --> */}
              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor:'#55acee'}}
                href="#!"
                role="button"
              ><i class="fab fa-twitter"></i
                ></a>

              {/* <!-- Google --> */}
              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor:'#dd4b39;'}}
                href="#!"
                role="button"
              ><i class="fab fa-google"></i
                ></a>

              {/* <!-- Instagram --> */}
              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor:'#ac2bac'}}
                href="#!"
                role="button"
              ><i class="fab fa-instagram"></i
                ></a>

              {/* <!-- Linkedin --> */}
              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor:'#0082ca'}}
                href="#!"
                role="button"
              ><i class="fab fa-linkedin-in"></i
                ></a>
              {/* <!-- Github --> */}
              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor:'#333333'}}
                href="#!"
                role="button"
              ><i class="fab fa-github"></i
                ></a>
            </section>
            {/* <!-- Section: Social media --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div class="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
    © 2020 Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </>
    );
  }
}

export default SliderTopRated;
