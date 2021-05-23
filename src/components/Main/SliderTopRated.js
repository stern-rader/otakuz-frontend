import React from 'react';

//mdbreact components
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  'mdbreact';
//css files
import './sliderTopRated.css';

class SliderTopRated extends React.Component {
  render() {
    return(
      <MDBContainer >
        <MDBCarousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView className="viewSlide" >
                <img
                  className="d-block w-100"
                  src='https://wallpapercave.com/wp/wp8115145.png'
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView className="viewSlide">
                <img
                  className="d-block w-100"
                  src='https://wallpaperaccess.com/full/56212.jpg'
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView className="viewSlide">
                <img
                  className="d-block w-100"
                  src='https://preview.redd.it/dgvtt8k1inx61.jpg?width=1200&format=pjpg&auto=webp&s=28ed52789d860935d96bf00f56d81eb4c67129da'
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView className="viewSlide">
                <img
                  className="d-block w-100"
                  src='https://www.justwatch.com/images/backdrop/180763325/s1920/hunter-x-hunter-the-last-mission'
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
