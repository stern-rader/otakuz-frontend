import React, { Component } from 'react';

//created components
import SliderTopRated from './SliderTopRated';
import SearchBar from './SearchBar';
import Results from './Results';
import Recomendation from './Recomendation';
import Loading from './Loading';
//axios library
import axios from 'axios';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false,
      animeResults: [],
      showTitle: true,
      waitReqs: false,
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
    await this.setState({ animeResults: results.data, showTitle: false, waitReqs: false });
    // console.log('id from main page' , results.data[0]._id );
    console.log('anime list', this.state.animeResults);
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
            <h1 style={{ textAlign: 'center', fontFamily: 'auto', marginTop: '10rem' }} >Top Rated</h1>
            <hr></hr>
          </>
        }
        <Results animeResults={this.state.animeResults} addToWatchList={this.props.addToWatchList} getAnimeData={this.props.getAnimeData} />
        <Recomendation />
      </>
    );
  }
}

export default Main;
