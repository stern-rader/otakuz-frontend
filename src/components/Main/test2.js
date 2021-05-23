import React, { Component } from 'react';
import test from './test';

import {Row} from 'react-bootstrap';

export class Results2 extends Component {
  render() {
    console.log('anime props',this.props.animeResults);
    const results = this.props.animeResults.map(data => {
      return <test
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
      />;
    });
    return (
      <Row>
        {results}
      </Row>
    );
  }
}

export default Results2;
