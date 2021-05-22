import React, { Component } from 'react';

//created components
import SliderTopRated from './SliderTopRated';
import SearchBar from './SearchBar';
import Results from './Results';
import axios from 'axios';

export class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      showResults:false ,
      animeResults:[],
    };
  }

  showResults = async (event) => {
    event.preventDefault();
    console.log(event.target.animeName.value);
    const url = (`https://api.jikan.moe/v3/search/anime?q=${event.target.animeName.value}`);
    event.target.animeName.value='';
    const results = await axios.get(url);
    console.log(results.data.results);
    await this.setState({animeResults:results.data.results});
    console.log('anime list',this.state.animeResults);

  }
  render() {
    return (
      <>
        <SliderTopRated />
        <SearchBar showResults={this.showResults} />
        <Results animeResults={this.state.animeResults} />
      </>
    );
  }
}

export default Main;
