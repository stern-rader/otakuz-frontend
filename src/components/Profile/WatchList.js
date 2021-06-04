import React, { Component } from 'react';

//created components
import AnimeCard from '../Main/AnimeCard';

//bootstrap components
import {Row} from 'react-bootstrap';

export class WatchList extends Component {
  render() {
    console.log('check id of watch list',this.props.animeResults);
    const results = this.props.animeResults.map((data,idx) => {
      console.log('yaaaaaaaarb id' ,data._id);
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
        idObj={data._id}
        id={data.id}
        deleteFromWatchList={this.props.deleteFromWatchList}
        // data={this.props.data}
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
