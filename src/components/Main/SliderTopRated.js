import React from 'react';

//bootstrap components
import {Carousel} from 'react-bootstrap';



class SliderTopRated extends React.Component {
  render() {
    return(
      <Carousel style={{width:'100%'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1000.png/09f/fff"
            alt="First slide"
            style={{height:'30rem'}}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1000.png/09f/fff"
            alt="Second slide"
            style={{height:'30rem'}}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1000.png/09f/fff"
            alt="Third slide"
            style={{height:'30rem'}}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default SliderTopRated;
