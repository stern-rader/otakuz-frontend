import React, { Component } from 'react';

//created components
import AnimeCard from './AnimeCard';

import SimilarCards from './SimilarCards';

//bootstrap components
import {Row} from 'react-bootstrap';

export class Results extends Component {
  render() {
    if( window.location.href === 'http://localhost:3000/'){
      console.log('anime props',this.props.animeResults);
      const results = this.props.animeResults.map((data,idx) => {
        if(idx < 15){
          return <AnimeCard
            name={data.name}
            img={data.img}
            description={data.description}
            rating={data.rating}
            start={data.start}
            end={data.end}
            // episodes={data.episodes}
            type={data.type}
            addToWatchList={this.props.addToWatchList}
            showBtns={true}
            index={idx}
            // id={data._id}
            getAnimeData={this.props.getAnimeData}
          />;}
        else return false;
      });
      return (
        <Row style={{marginRight:'0px'}}>
          {results}
        </Row>
      );
    }
    else if (window.location.href === 'http://localhost:3000/animeprofile'){
      const similerResults = this.props.similarAnimesData.map((data,idx) => {
        if(idx < 15){
          return <SimilarCards
            similarAnimesData={this.props.similarAnimesData}
            name={data.name}
            img={data.img}
            description={data.description}
            rating={data.rating}
            start={data.start}
            end={data.end}
            // episodes={data.episodes}
            type={data.type}
            addToWatchList={this.props.addToWatchList}
            showBtns={true}
            index={idx}
            // id={data._id}
            getAnimeData={this.props.getAnimeData}
          />;}
        else return false;
      });
      return(
        <Row style={{marginRight:'0px'}}>
          {similerResults}
        </Row>
      );
    }
  }
}

export default Results;

