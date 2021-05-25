import React, { Component } from 'react';
//axios library
import axios from 'axios';
//css files
import './reviews.css';
//mdb componens
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
//boostrap components
import {Row , Col} from 'react-bootstrap';
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


  addReview = async (event) => {
    // if(!this.props.auth0.isAuthenticated) this.props.auth0.loginWithRedirect();
    event.preventDefault();
    if(this.state.comment === '' || this.state.name==='') return ;
    const reviewData = {
      comment:this.state.comment,
      email:this.state.name.toUpperCase(),
      id:this.props.id
    };
    const reviews = await axios.post(`${process.env.REACT_APP__BACKEND_URL}/reviews` , reviewData);
    await this.setState({reviews:reviews.data});
    console.log('reviews test' , reviews);
    console.log('recieved reviews ' , reviews.data);
    event.target.name.value='';
    event.target.comment.value = '';
  };
  onChangeComment = (event) => this.setState({comment:event.target.value});
  onChangeName = (event) => this.setState({name:event.target.value});

  render() {
    const reviewsData = this.state.reviews.map((data) => {
      return (


        <div class="container mt-5">
          <div class="d-flex justify-content-center row">
            <div class="col-md-8">
              <div class="d-flex flex-column comment-section">
                <div class="bg-white p-2">
                  <div class="d-flex flex-row user-info">
                    <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">{data.email}</span><span class="date text-black-50">Shared publicly - Jan 2020</span></div>
                  </div>
                  <div class="mt-2">
                    <p class="comment-text">{data.comment}</p>
                  </div>
                </div>
                <div class="bg-white">

                </div>
                <div class="bg-light p-2">
                  <div class="d-flex flex-row align-items-start"></div>

                </div>
              </div>
            </div>
          </div>
        </div>


      );
    });
    return (
      <>

        <Row>
          <Col>
            <div>{reviewsData}</div>
          </Col>
          <Col>
            <MDBContainer id='reviewFormContainer' >
              <MDBRow>
                <MDBCol md="6">
                  <form onSubmit={this.addReview}>
                    {/* <p className="h5 text-center mb-4">Add your review</p> */}
                    <div className="grey-text">
                      <MDBInput label="Your name" icon="user" group type="text" validate error="wrong" success="right" onChange={this.onChangeName} name='name'/>
                      <MDBInput type="textarea" rows="2" label="Your Review" icon="pencil-alt" onChange={this.onChangeComment} name='comment' />
                    </div>
                    <div className="text-center">
                      <MDBBtn outline color="secondary" type='submit' >
                    Add
                        <MDBIcon far icon="paper-plane" className="ml-1" />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </Col>
        </Row>
        <Results similarAnimesData={this.state.similarAnimesData} />

      </>

    );
  }
}

export default Reviews;
