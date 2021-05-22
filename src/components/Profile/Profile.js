import React, { Component } from 'react';
//auth library
import { withAuth0 } from '@auth0/auth0-react';
//created components
import WatchList from './WatchList';


export class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    console.log('profile' , this.props.test);
    return (
      <div>
        <div>Hello {user.name}</div>
        <div>Email: {user.email}</div>
        <WatchList test={this.props.test} />

      </div>
    );
  }
}

export default withAuth0(Profile);

