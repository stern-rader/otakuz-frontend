import React, { Component } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { withAuth0 } from '@auth0/auth0-react';


export class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    return (
      <div>
        <div>Hello {user.name}</div>
        <div>Email: {user.email}</div>


      </div>
    );
  }
}

export default withAuth0(Profile);

