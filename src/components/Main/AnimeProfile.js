import React, { Component } from 'react';
//axios library
import axios from 'axios';
//bootstrap components
import {Row , Col} from 'react-bootstrap';
//css files
import './animeProfile.css';
//created Components
import Reviews from './Reviews';
import Loading from './Loading';


export class AnimeProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      animeDetails:{},
      waitReqs:false,
      id:-1,
    };
  }

  async componentDidMount() {
    const id = localStorage.getItem('id');
    await this.setState({waitReqs:true , id:id});
    console.log('laaast id', id);
    const url = (`${process.env.REACT_APP__BACKEND_URL}/do-review?id=${id}`);
    const results = await axios.get(url);
    await this.setState({animeDetails:results.data , waitReqs:false});
    console.log('result for the data', results.data);
    // const urlReviews = (`${process.env.REACT_APP__BACKEND_URL}/reviews?id=${id}`);
    // const reviews = await axios.get(urlReviews);
    // console.log('get reviews ' ,reviews.data);
  }

  render() {
    console.log('inside the anime profile' , this.props.data);
    if (this.props.data.id) {
      let learnMoreData = localStorage.setItem('id', this.props.data.id);
      console.log(learnMoreData);
    }
    return (
      <>

        <Loading wait={this.state.waitReqs} />

        {!this.state.waitReqs &&
      <>
        <Row id='detailsContainer'>
          <Col>
            <img src={this.state.animeDetails.img} alt='' className='animeImg' />
          </Col>
          <Col>
            <h1>{this.state.animeDetails.name}</h1>
            <p className='animeDescription' >{this.state.animeDetails.description}</p>
            <h3>Rating: {this.state.animeDetails.rating}</h3>
            <h3>start: {this.state.animeDetails.start}</h3>
            <h3>Type: {this.state.animeDetails.type}</h3>
            {/* <h3>id: {this.props.data.id}</h3> */}
          </Col>
        </Row>
        <Row>
          <div id='trailer'>
            <iframe width="1000" height="1000" src={this.state.animeDetails.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay="false" autostart="false" ></iframe>
          </div>
        </Row>
        <div id='reveiwSection' >
          <h1>Reveiws</h1>
          <hr></hr>
          <Reviews id={this.state.id}/>
        </div>
      </>
        }
      </>

    );
  }
}

export default AnimeProfile;
