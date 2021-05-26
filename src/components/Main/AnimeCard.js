import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
//auth library
import { withAuth0 } from '@auth0/auth0-react';
//axios library
import axios from 'axios';
//bootstrap comonents
import { Button } from 'react-bootstrap';
//css files
import './animeCard.css';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBRow, MDBCol, MDBIcon, MDBCardFooter } from
  'mdbreact';
import { Link } from 'react-router-dom';

export class AnimeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'plus',
      favoriteClicking: 3,
      likesClicking: 3,
      like: '❤',
      id:-1,
      title:'Add To Watch List',
      variant:'primary'
    };
  }

  addToWatchList = async() => {
    console.log('id from results page' , this.props.id);
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
      id:this.props.id,
    };
    const watchListAnimes = await axios.post(`${process.env.REACT_APP__BACKEND_URL}/otakuzUser/user-list` , animeData);
    await this.setState({id:watchListAnimes.data[watchListAnimes.data.length-1]._id});
    console.log('id of the card' , this.state.id);
  }

  deleteFromWatchList = async () => {
    // console.log('props index' ,this.props.index);
    const id= this.props.id;
    const query = {
      email:this.props.auth0.user.email,
    };

    const results = await axios.delete(`${process.env.REACT_APP__BACKEND_URL}/otakuzUser/user-list/${id}` , {params:query}) ;
    console.log('anime id' , id);
    console.log('animes after deletion',results.data);
    // await this.setState({indexRemove:this.state.indexRemove-1});
  }

  changeButtonValue = async () => {
    await this.setState({ favoriteClicking: this.state.favoriteClicking + 1 });
    if (this.state.favoriteClicking % 2 === 0) {
      this.addToWatchList();
      this.setState({
        icon: '',
        title:'Remove From Watch List',
        variant:'danger'
      });
    }
    else {
      this.deleteFromWatchList(this.props.index);
      this.setState({
        icon: 'plus',
        title:'Add To Watch List',
        variant:'primary'
      });
    }
  }
  changeLikeColor = async () => {
    await this.setState({ likesClicking: this.state.likesClicking + 1 });
    if (this.state.likesClicking % 2 === 0) {
      this.setState({
        like: '❤️'
      });
    }
    else {
      this.setState({
        like: '❤',
      });
    }
  }

  render() {
    return (
      <>
        <MDBRow >
          <MDBCol md="4">
            <MDBCard key={this.props.index} onMouseOver={() => this.props.getAnimeData(this.props)}>
              <MDBCardImage
                top
                src={this.props.img}
                overlay='white-slight'
                hover
                waves
                alt='MDBCard image cap'
              />
              <MDBCardBody>
                <MDBCardTitle style={{textAlign:'center'}}>{this.props.name}</MDBCardTitle>
              </MDBCardBody>
              <MDBCardFooter>
                {this.props.showBtns &&
              <>
                <div style={{textAlign:'center'}}>
                  <div style={{textAlign:'center'}}>
                    <Button class='mainButtons' variant={this.state.variant} onClick={() => {this.changeButtonValue();}}><MDBIcon icon={this.state.icon} className='black-text'/> {this.state.title} </Button>
                  </div>
                </div>
              </>
                }
                {!this.props.showBtns &&
                <div style={{textAlign:'center'}}>
                  <Button class='mainButtons' onClick={() => this.props.deleteFromWatchList(this.props.id)}>Remove</Button>
                </div>
                }
                <hr />
                <Link to={{pathname:'/animeprofile'}} href='/animeprofile' className='black-text d-flex justify-content-end'>
                  <h5>
              View Anime Details
                    <MDBIcon icon='angle-double-right' className='ml-2' />
                  </h5>
                </Link>
                
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>



      </>
    );
  }
}

export default withAuth0(AnimeCard);


