import React, { Component } from 'react';

//created components
import AnimeCard from '../Main/AnimeCard';

//bootstrap components
import {Row} from 'react-bootstrap';

export class WatchList extends Component {
  render() {
    console.log('anime props',this.props.animeResults);
    const results = this.props.animeResults.map((data,idx) => {
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
        showBtns={false}
        index={idx}
        deleteFromWatchList={this.props.deleteFromWatchList}
        data={this.props.data}
        getAnimeData={this.props.getAnimeData}
      />;
    });
    return (
      <Row>
        {results}
      </Row>
    );
  }
}

export default WatchList;
