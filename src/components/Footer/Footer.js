import React, { Component } from 'react';

//bootstrap component
import {Card} from 'react-bootstrap';

export class Test extends Component {
  render() {
    return (
      <Card style={{ width: '100%' , marginTop:'30rem' , textAlign:'center' }}>

        <Card.Body>
          <Card.Title>About us </Card.Title>
          <Card.Text>
         anime website
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Test;
