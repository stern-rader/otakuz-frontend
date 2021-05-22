import React, { Component } from 'react';

//bootstrap components
import {Carousel} from 'react-bootstrap';

export class SliderTopRated extends Component {
  render() {
    return (
      <>
        <Carousel style={{width:'20%'}}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/300.png/09f/fff"
              alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/300.png/09f/fff"
              alt="Second slide"
            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/300.png/09f/fff"
              alt="Third slide"
            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default SliderTopRated;
