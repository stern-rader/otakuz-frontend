import React, { Component } from 'react';

export class AnimeProfile extends Component {
  render() {
    console.log('inside the anime profile' , this.props.imgUrl);
    return (
      <div>
        <h1>Here we will add more details about the anime</h1>
        <img src={this.props.imgUrl} alt='' />
      </div>
    );
  }
}

export default AnimeProfile;
