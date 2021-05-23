import React, { Component } from 'react';
//auth library
import { withAuth0 } from '@auth0/auth0-react';
//axios library
import axios from 'axios';
//bootstrap comonents
import { Card, Button } from 'react-bootstrap';
//css files
import './animeCard.css';

export class AnimeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: 'Add To Watch List',
      variant: 'primary',
      favoriteClicking: 3,
      likesClicking: 3,
      likeControl: 'ADD TO FAVORITE',
      like: '❤',
      indexRemove:-1,
    };
  }

  addToWatchList = async() => {
    if(!this.props.auth0.isAuthenticated) this.props.auth0.loginWithRedirect();
    const animeData = {
      email:this.props.auth0.user.email,
      name:this.props.name ,
      url:'',
      img:this.props.img,
      description:this.props.description,
      rating:this.props.rating,
      type:this.props.type,
      rate:'',
      start:this.props.start,
      end:this.props.end,
      followers:0,
    };
    await axios.post(`http://localhost:3666/otakuzUser/user-list` , animeData);
  }

  deleteFromWatchList = async (index) => {
    console.log('props index' ,this.props.index);
    const id= this.state.indexRemove;
    const query = {
      email:this.props.auth0.user.email,
    };

    const results = await axios.delete(`${process.env.REACT_APP__BACKEND_URL}/otakuzUser/user-list/${id}` , {params:query}) ;
    console.log('anime id' , id);
    console.log('animes after deletion',results.data);
    await this.setState({indexRemove:this.state.indexRemove-1});
  }

  changeButtonValue = async () => {
    await this.setState({ favoriteClicking: this.state.favoriteClicking + 1 });
    if (this.state.favoriteClicking % 2 === 0) {
      this.addToWatchList();
      this.setState({
        buttonValue: 'Remove From Watch List',
        variant: 'danger',
      });
    }
    else {
      this.deleteFromWatchList(this.props.index);
      this.setState({
        buttonValue: 'Add To Watch List',
        variant: 'primary',
      });
    }
  }
  changeLikeColor = async () => {
    await this.setState({ likesClicking: this.state.likesClicking + 1 });
    if (this.state.likesClicking % 2 === 0) {
      this.setState({
        likeControl: 'REMOVE FROM FAVORITE',
        like: '❤️'
      });
    }
    else {
      this.setState({
        likeControl: 'ADD TO FAVORITE',
        like: '❤',
      });
    }
  }

  render() {
    // const {loginWithRedirect} = this.props.auth0;
    // this.props.showBtns ? this.setState({indexRemove:this.props.index})
    return (
      <>
        <Card key={this.props.index}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>❤️ {this.props.rating}</Card.Text>
            <Card.Text >
              {this.props.description}
            </Card.Text>
            <Card.Text>Start Date : {this.props.start}</Card.Text>
            <Card.Text>End Date : {this.props.end}</Card.Text>
            <Card.Text>Type: {this.props.type}</Card.Text>
          </Card.Body>

          <Card.Footer>
            {this.props.showBtns &&
            <>
              <Button onClick={this.changeLikeColor}>{this.state.like} {this.state.likeControl}</Button>
              <Button variant={this.state.variant} onClick={() => {this.changeButtonValue();}}>{this.state.buttonValue}</Button>
            </>
            }
            {!this.props.showBtns &&
            <>
              <Button onClick={() => this.props.deleteFromWatchList(this.props.index)}>Remove from watch list</Button>
            </>
            }
          </Card.Footer>
        </Card>
      </>
    );
  }
}

export default withAuth0(AnimeCard);
