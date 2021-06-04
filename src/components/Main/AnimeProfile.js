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
import { withRouter } from "react-router"; 

export class AnimeProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      animeDetails:{},
      waitReqs:false,
    };
  }

  async componentDidMount() {
    // const urlOfPage = (window.location.href).split('/') ;
    // const indexOfId = urlOfPage.indexOf('animeprofile') + 1 ;
    const id = this.props.match.params.id;
    console.log('the index using url '+id);
    await this.setState({waitReqs:true});
    console.log('laaast id', id);
    const url = (`${process.env.REACT_APP__BACKEND_URL}/do-review?id=${id}`);
    const results = await axios.get(url);
    await this.setState({animeDetails:results.data , waitReqs:false});
    console.log('result for the data', results.data);

  }

  render() {
    console.log('test id params ', this.props.match.params.id);
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
            <iframe width="1200" height="550" src={this.state.animeDetails.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay="false" autostart="false" ></iframe>
          </div>
        </Row>
        <div id='reveiwSection' >
          <h1>Reveiws</h1>
          <hr></hr>
          <Reviews id={this.props.match.params.id}/>
        </div>
      </>
        }
      </>

    );
  }
}

export default withRouter(AnimeProfile);
