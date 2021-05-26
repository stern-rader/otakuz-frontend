import React, { Component } from 'react';

//created components
import SliderTopRated from './SliderTopRated';
import SearchBar from './SearchBar';
import Results from './Results';
// import Recomendation from './Recomendation';
import Loading from './Loading';
//axios library
import axios from 'axios';
//bootstrap components
import Pagination from 'react-bootstrap/Pagination';
//css files
import './main.css';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false,
      animeResults: [],
      showTitle: true,
      waitReqs: false,
      active:6,
      title:'tv',
    };
  }
  async componentDidMount() {
    await this.setState({ waitReqs: true });
    const url = (`${process.env.REACT_APP__BACKEND_URL}/topAnimes`);
    const results = await axios.get(url);
    console.log('check the props', results);
    await this.setState({ animeResults: results.data });
    console.log('anime list', this.state.animeResults);
    await this.setState({ waitReqs: false });
  }

  showResults = async (event) => {
    await this.setState({ waitReqs: true });
    event.preventDefault();
    console.log(event.target.animeName.value);
    const url = (`${process.env.REACT_APP__BACKEND_URL}/anime?q=${event.target.animeName.value}`);
    event.target.animeName.value = '';
    const results = await axios.get(url);
    console.log(results.data);
    await this.setState({ animeResults: results.data, showTitle: false, waitReqs: false , active:0 });
    // console.log('id from main page' , results.data[0]._id );
    console.log('anime list', this.state.animeResults);
  }

  getRatedAnimes = async (num,type) => {
    console.log('clicked item');
    const url = (`${process.env.REACT_APP__BACKEND_URL}/anime/top/${type}`);
    const results = await axios.get(url);
    console.log('test type', results.data);
    await this.setState({ animeResults: results.data , active:num ,title:type });
  }
  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center', fontFamily: 'auto' }} >Highly Recommended</h1>
        <hr></hr>
        <SliderTopRated />
        <SearchBar id="search" showResults={this.showResults} />
        <Loading wait={this.state.waitReqs} />
        {this.state.showTitle &&
          <>
            <h1 style={{ textAlign: 'center', fontFamily: 'auto', marginTop: '10rem' }} >{this.state.title}</h1>
            <hr></hr>
          </>
        }
        <Pagination>
          <Pagination.Item key={1} active={this.state.active===1} onClick={ () => this.getRatedAnimes(1,'special')} >
                special
          </Pagination.Item>
          <Pagination.Item key={2} active={this.state.active===2} onClick={ () => this.getRatedAnimes(2,'bypopularity')}>
          popular
          </Pagination.Item>
          <Pagination.Item key={3} active={this.state.active===3} onClick={ () => this.getRatedAnimes(3,'upcoming')}>
          upcoming
          </Pagination.Item>
          <Pagination.Item key={4} active={this.state.active===4} onClick={() => this.getRatedAnimes(4,'airing')}>
          airing
          </Pagination.Item>
          <Pagination.Item key={5} active={this.state.active===5} onClick={ () => this.getRatedAnimes(5,'movie')}>
          movie
          </Pagination.Item>
          <Pagination.Item key={6} active={this.state.active===6} onClick={ () => this.getRatedAnimes(6,'tv')}>
          tv
          </Pagination.Item>
        </Pagination>
        <Results animeResults={this.state.animeResults} addToWatchList={this.props.addToWatchList} getAnimeData={this.props.getAnimeData} />
        {/* <Recomendation /> */}
      </>
    );
  }
}

export default Main;
