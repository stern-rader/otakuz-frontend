import React, { Component } from 'react';

//created components
import SliderTopRated from './SliderTopRated';
import SearchBar from './SearchBar';
import Results from './Results';
import Recomendation from './Recomendation';
//axios library
import axios from 'axios';

export class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      showResults:false ,
      animeResults:[],
    };
  }
  async componentDidMount(){
    const url = (`${process.env.REACT_APP__BACKEND_URL}/topAnimes`);
    const results = await axios.get(url);
    console.log(results.data);
    await this.setState({animeResults:results.data});
    console.log('anime list',this.state.animeResults);
  }

  showResults = async (event) => {
    event.preventDefault();
    console.log(event.target.animeName.value);
    const url = (`${process.env.REACT_APP__BACKEND_URL}/anime?q=${event.target.animeName.value}`);
    event.target.animeName.value='';
    const results = await axios.get(url);
    console.log(results.data);
    await this.setState({animeResults:results.data});
    console.log('anime list',this.state.animeResults);
  }

  render() {
    return (
      <>
        <SliderTopRated />
        <SearchBar showResults={this.showResults} />
        <Results animeResults={this.state.animeResults} addToWatchList={this.props.addToWatchList} />
        <Recomendation />
      </>
    );
  }
}

export default Main;
