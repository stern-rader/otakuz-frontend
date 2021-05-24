import React, { Component } from 'react';
//bootstrap components
import {Row , Col} from 'react-bootstrap';
//css files
import './animeProfile.css';
// name: "Gintama°"
// rating: 9.09
// showBtns: true
// start: "Apr 2015"
// type: "TV"
export class AnimeProfile extends Component {
  render() {
    console.log('inside the anime profile' , this.props.data);
    return (
      <>
        <Row id='detailsContainer'>
          <Col>
            <img src={this.props.data.img} alt='' />
          </Col>
          <Col>
            <h1>{this.props.data.name}</h1>
            <h3>Rating: {this.props.data.rating}</h3>
            <h3>start: {this.props.data.start}</h3>
            <h3>Type: {this.props.data.type}</h3>
          </Col>
        </Row>
        <div class='reveiwSection' >
          <h1>Reveiws section</h1>
          <hr></hr>
        </div>
      </>

    );
  }
}

export default AnimeProfile;
