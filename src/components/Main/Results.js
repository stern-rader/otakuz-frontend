import React, { Component } from 'react';

//created components
import AnimeCard from './AnimeCard';

//bootstrap components
import {Row} from 'react-bootstrap';

export class Results extends Component {
  render() {
    console.log('anime props',this.props.animeResults);
    const results = this.props.animeResults.map(data => {
      return <AnimeCard
        title={data.title}
        image_url={data.image_url}
        synopsis={data.synopsis}
        score={data.score}
        start_date={data.start_date}
        end_date={data.end_date}
        episodes={data.episodes}
        type={data.type}
        addToWatchList={this.props.addToWatchList}
      />;
    });
    return (
      <Row>
        {results}
      </Row>
    );
  }
}

export default Results;
