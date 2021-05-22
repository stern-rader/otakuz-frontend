import React, { Component } from 'react';
//auth library
import { withAuth0 } from '@auth0/auth0-react';
//axios library
import axios from 'axios';
//created components
import WatchList from './WatchList';
// import Results from '../Main/Results';


export class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      watchListData:[],
    };
  }

  async componentDidMount(){

    const email = this.props.auth0.user.email ;
    console.log('email profile' ,email);
    const url = (`http://localhost:3666/otakuzUser?email=${email}`);
    const results = await axios.get(url);
    console.log('profile results' ,results.data);
    await this.setState({watchListData:results.data});
    console.log('anime list',this.state.animeResults);
  }

  render() {
    const { user } = this.props.auth0;
    console.log('profile' , this.props.test);
    return (
      <div>
        <div>Hello {user.name}</div>
        <div>Email: {user.email}</div>
        <WatchList animeResults={this.state.watchListData} />
        {/* <Results animeResults={this.state.watchListData} showBtns={0}/> */}

      </div>
    );
  }
}

export default withAuth0(Profile);

