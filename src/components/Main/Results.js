import React, { Component } from 'react';

//created components
import AnimeCard from './AnimeCard';

//bootstrap components
import {Row} from 'react-bootstrap';

export class Results extends Component {
  render() {
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
          id={data.id}
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
}

export default Results;
