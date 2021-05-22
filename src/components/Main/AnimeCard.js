import React, { Component } from 'react';

//bootstrap comonents
import { Card, Button } from 'react-bootstrap';

export class AnimeCard extends Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem', marginLeft: '8rem' }}>
          <Card.Img variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.synopsis}
            </Card.Text>
            <Card.Text>rate: {this.props.score}</Card.Text>
            <Card.Text>Start Date : {this.props.start_date}</Card.Text>
            <Card.Text>End Date : {this.props.end_date}</Card.Text>
            <Card.Text>espisodes: {this.props.episodes}</Card.Text>
            <Card.Text>Type: {this.props.type}</Card.Text>

            <Button variant="primary">Add To Watch List</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default AnimeCard;
