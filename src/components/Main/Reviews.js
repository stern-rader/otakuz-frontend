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
// import Results from './Results';

// import { MDBCard, MDBCardBody, MDBTooltip, MDBCollapse, } from 'mdbreact';


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
    const urlReviews = (`${process.env.REACT_APP__BACKEND_URL}/reviews?id=${this.props.id}`);
    const reviews = await axios.get(urlReviews);
    console.log('get reviews ' ,reviews.data);
    await this.setState({ similarAnimesData: results.data , reviews:reviews.data });
    // let date = JSON.stringify(new Date());
    // console.log('date' ,date);
    // console.log('test date' , date.slice(0 ,date.indexOf('(') ));
    // console.log('test date', this.getDate());

  }


  addReview = async (event) => {
    // if(!this.props.auth0.isAuthenticated) this.props.auth0.loginWithRedirect();
    event.preventDefault();
    const date = this.getDate();
    // console.log('test date' , JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
    // console.log(date.slice(date.indexOf('(') , ));
    if(this.state.comment === '' || this.state.name==='') return ;
    const reviewData = {
      comment:this.state.comment,
      email:this.state.name.toUpperCase(),
      id:this.props.id,
      date:date,
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


  getDate = () => {
    let now= new Date();
    let ampm= 'am';
    let h= now.getHours();
    let m= now.getMinutes();
    // s= now.getSeconds();
    if(h>= 12){
      if(h>12)h-= 12;
      ampm= 'pm';
    }
    if(h<10) h= '0'+h;
    if(m<10) m= '0'+m;


    let weekdayNames = new Array("Sun", "Mon", "Tuey",
      "Wed", "Thu", "Fri", "Sat");

    let monthNames = new Array("Jan", "Feb", "Mar", 
      "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
      "Oct", "Nov", "Dec");

    //var dateString = now.toLocaleDateString();
    let weekday = weekdayNames[now.getDay()];
    let month = monthNames[now.getMonth()];
    let dateString = weekday + ', ' + month + ' ' + now.getDate() + ' ' + now.getFullYear();
    let time = dateString +' '+h+':'+m+' '+ampm;
    return time ;
  }
  render() {
    console.log('test the id' , this.props.id );
    const reviewsData = this.state.reviews.map((data) => {
      return (


        <section class="my-5">

          {/* <!-- Card header --> */}
          <div class="card-header border-0 font-weight-bold d-flex justify-content-between">
            <p id='date' >{data.date}</p>
          </div>

          <div class="media mt-4 px-1">
            {/* <img class="card-img-100 d-flex z-depth-1 mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" */}
            {/* alt="Generic placeholder " /> */}
            <div id="container">
              <div id="name">
                {data.email[0]}
              </div>
            </div>
            <div class="media-body">
              <h5 class="font-weight-bold mt-0">
                <a href="#h">{data.email}</a>
              </h5>
              <p id='comment' >{data.comment}</p>
            </div>
          </div>

        </section>


      );
    });
    return (
      <>

        <Row>
          <Col id='reviewsCol'>
            <div>{reviewsData}</div>
          </Col>
          <Col id='formCol' >
            <MDBContainer id='reviewFormContainer' >
              <MDBRow>
                <MDBCol md="6">
                  <form onSubmit={this.addReview} id='reviewForm' >
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
        {/* <Results similarAnimesData={this.state.similarAnimesData} /> */}
        {/*  */}
        {/*  */}
        {/*  */}
      </>
    );
  }
}

export default Reviews;



// <div class="container mt-5">
// <div class="d-flex justify-content-center row">
//   <div class="col-md-8">
//     <div class="d-flex flex-column comment-section">
//       <div class="bg-white p-2">
//         <div class="d-flex flex-row user-info">
//           <div id="container">
//             <div id="name">
//               {data.email[0]}
//             </div>
//           </div>
//           <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">{data.email}</span><span class="date text-black-50"> Jan 2020</span></div>
//         </div>
//         <div class="mt-2">
//           <p class="comment-text">{data.comment}</p>
//         </div>
//       </div>
//       <div class="bg-white">

//       </div>
//       <div class="bg-light p-2">
//         <div class="d-flex flex-row align-items-start"></div>

//       </div>
//     </div>
//   </div>
// </div>
// </div>
