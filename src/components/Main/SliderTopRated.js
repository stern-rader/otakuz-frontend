import React from 'react';

//mdbreact components
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  'mdbreact';
//css files
import './sliderTopRated.css';
import hxh from './img/hxh.png';
import aot from './img/AOT.png';
import onepiece from './img/onepiece.png';

class SliderTopRated extends React.Component {
  render() {
    return(
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView className="viewSlide" >
                <img
                  className="d-block w-100"
                  src={hxh}
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView className="viewSlide">
                <img
                  className="d-block w-100"
                  src={aot}
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView className="viewSlide">
                <img
                  className="d-block w-100"
                  src={onepiece}
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default SliderTopRated;
