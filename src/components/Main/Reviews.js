import React, { Component } from 'react';
//axios library
import axios from 'axios';
//css files
import './reviews.css';
//mdb componens
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
//created components
import Results from './Results';


export class Reviews extends Component {
  constructor(props){
    super(props);
    this.state = {
      comment:'',
      name:'',
      reviews:[],
      similarAnimesData:[],
    };
  }

  async componentDidMount(){
    // const animeId = -1 ;
    // console.log('email profile' ,animeId);
    // const url = (`${process.env.REACT_APP__BACKEND_URL}/otakuzUser?email=${animeId}`);
    // const animeData = await axios.get(url);
    // const urlSimilarAnimes = (`${process.env.REACT_APP__BACKEND_URL}/anime/top/special`);
    // const similarAnimes = await axios.get(urlSimilarAnimes);
    // console.log('profile results' ,animeData);
    // await this.setState({ similarAnimesData:similarAnimes.data});
    // console.log('similerAnime'+ similarAnimes.data);
    const url = (`${process.env.REACT_APP__BACKEND_URL}/topAnimes`);
    const results = await axios.get(url);
    console.log('similarAnimesData' , results.data);
    await this.setState({ similarAnimesData: results.data });

  }

  addReview = async () => {
    // if(!this.props.auth0.isAuthenticated) this.props.auth0.loginWithRedirect();
    //
    const reviewData = {
      comment:this.state.comment,
      name:this.state.name,
      // id:animeId
    };
    const reviews = await axios.post(`${process.env.REACT_APP__BACKEND_URL}/otakuzUser/user-list/reviews` , reviewData);
    await this.setState({reviews:reviews.data});
    console.log('recieved reviews ' , reviews.data);
  };
  onChangeComment = (event) => this.setState({comment:event.target.value});
  onChangeName = (event) => this.setState({name:event.target.value});

  render() {
    const reviewsData = this.state.reviews.map((data) => {
      return (
        <div>
          {data.comment}
        </div>
      );
    });
    return (
      <>
        <div>
          {reviewsData}
        </div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form>
                <p className="h5 text-center mb-4">Add your review</p>
                <div className="grey-text">
                  <MDBInput label="Your name" icon="user" group type="text" validate error="wrong" success="right" onChange={this.onChangeName} />
                  <MDBInput type="textarea" rows="2" label="Your Review" icon="pencil-alt" onChange={this.onChangeComment} />
                </div>
                <div className="text-center">
                  <MDBBtn outline color="secondary" onClick={this.test} >
                    Add
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Results similarAnimesData={this.state.similarAnimesData} />
      </>

    );
  }
}

export default Reviews;
