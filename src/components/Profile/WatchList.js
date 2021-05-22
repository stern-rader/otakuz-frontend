import React, { Component } from 'react';

export class WatchList extends Component {
  render() {
    console.log('watchlist' , this.props.test);
    return (
      <div>
        {this.props.test}
      </div>
    );
  }
}

export default WatchList;
