import React, { Component } from 'react';

//bootstrap comonents
import { Card, Button } from 'react-bootstrap';

export class AnimeCard extends Component {
  constructor(props){
    super(props);
    this.state={
      buttonValue:'Add To Watch List',
      variant:'primary',
      favoriteClicking:3,
      likesClicking:3,
      likeControl:'ADD TO FAVORITE',
      like:'❤',
    };
  }
  changeButtonValue = async () => {
    await this.setState({favoriteClicking:this.state.favoriteClicking+1});
    if(this.state.favoriteClicking % 2 === 0){
      this.setState({
        buttonValue:'Remove From Watch List',
        variant:'danger',
      });
    }
    else{
      this.setState({
        buttonValue:'Add To Watch List',
        variant:'primary',
      });
    }
  }
  changeLikeColor=async ()=>{
    await this.setState({likesClicking:this.state.likesClicking+1});
    if(this.state.likesClicking % 2 === 0){
      this.setState({
        likeControl:'REMOVE FROM FAVORITE',
        like:'❤️'
      });
    }
    else{
      this.setState({
        likeControl:'ADD TO FAVORITE',
        like:'❤',
      });
    }
  }
  render() {
    return (
      <>
        <Card style={{ width: '19rem', marginLeft: '8rem',padding:'2px', border:'solid 1 px black'}}>
          <Card.Img variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>❤️ {this.props.score}</Card.Text>
            <Card.Text >
              {this.props.synopsis}
            </Card.Text>
            <Card.Text>Start Date : {this.props.start_date}</Card.Text>
            <Card.Text>End Date : {this.props.end_date}</Card.Text>
            <Card.Text>espisodes: {this.props.episodes}</Card.Text>
            <Card.Text>Type: {this.props.type}</Card.Text>
            <Button onClick={this.changeLikeColor}>{this.state.like} {this.state.likeControl}</Button>
            <Button variant={this.state.variant} onClick={this.changeButtonValue}>{this.state.buttonValue}</Button
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default AnimeCard;
