import React, { Component } from 'react';

//mdbreact components
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
//css files
import './footer.css';

export class Test extends Component {
  render() {
    return (
      <footer class="bg-light text-center text-white" id='footer'>
        {/* <!-- Grid container --> */}
        <div class="container p-4 pb-0" >
          {/* <!-- Section: Social media --> */}
          <section class="mb-4">
            {/* <!-- Facebook --> */}
            <a
              class="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
              id='facebook'
            ><i class="fab fa-facebook-f" ></i
              ></a>

            {/* <!-- Twitter --> */}
            <a
              class="btn btn-primary btn-floating m-1"
              style={{backgroundColor:'#55acee'}}
              href="#!"
              role="button"
              id='twitter'
            ><i class="fab fa-twitter"></i
              ></a>

            {/* <!-- Google --> */}
            <a
              class="btn btn-primary btn-floating m-1"
              id='google'
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
              id='instagram'
            ><i class="fab fa-instagram"></i
              ></a>

            {/* <!-- Linkedin --> */}
            <a
              class="btn btn-primary btn-floating m-1"
              style={{backgroundColor:'#0082ca'}}
              href="#!"
              role="button"
              id='linkedin'
            ><i class="fab fa-linkedin-in"></i
              ></a>
            {/* <!-- Github --> */}
            <a
              class="btn btn-primary btn-floating m-1"
              style={{backgroundColor:'#333333'}}
              href="#!"
              role="button"
              id='github'
            ><i class="fab fa-github"></i
              ></a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div class="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
    © 2020 :
          <a class="text-white" href="https://mdbootstrap.com/"> Otakuz</a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    );
  }
}

export default Test;
