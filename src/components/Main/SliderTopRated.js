import React from 'react';

//mdbreact components
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  'mdbreact';
//css files
import './sliderTopRated.css';

class SliderTopRated extends React.Component {
  render() {
    return(
      <MDBContainer style={{width:'width:100%'}}>
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
                  src="https://i.pinimg.com/originals/3c/c6/13/3cc61304f7caa63f54ea9e1528fb9f71.jpg"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Fullmetal Alchemist: Brotherhood</h3>
                <p>Alchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: 
                  the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. 
                  It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called "automail" and become a state alchemist, the Fullmetal Alchemist.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView className="viewSlide">
                <img
                  className="d-block w-100"
                  src="https://www.themoviedb.org/t/p/original/4jA40N280wb9NT7yjtFdcJND5aq.jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Hunter x Hunter</h3>
                <p>Hunter x Hunter is set in a world where Hunters exist to perform all manner of dangerous tasks like capturing criminals and bravely searching for lost treasures in uncharted territories. Twelve-year-old Gon Freecss is determined to become the best Hunter possible in hopes of finding his father, who was a Hunter himself and had long ago abandoned his young son. 
                  However, Gon soon realizes the path to achieving his goals is far more challenging than he could have ever imagined.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView className="viewSlide">
                <img
                  className="d-block w-100"
                  src="https://wallpaperaccess.com/full/56212.jpg"
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Death Note</h3>
                <p>The story follows Light Yagami, a teen genius who discovers a mysterious notebook: the "Death Note", which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default SliderTopRated;
