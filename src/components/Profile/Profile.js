import React, { Component } from 'react';
//auth library
import { withAuth0 } from '@auth0/auth0-react';
//axios library
import axios from 'axios';
//created components
import WatchList from './WatchList';
//css files
import './profile.css';


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
    const url = (`${process.env.REACT_APP__BACKEND_URL}/otakuzUser?email=${email}`);
    const results = await axios.get(url);
    console.log('profile results' ,results.data);
    await this.setState({watchListData:results.data});
    console.log('anime list',this.state.animeResults);
  }

  deleteFromWatchList = async (index) => {
    const id= index ;
    const query = {
      email:this.props.auth0.user.email,
    };

    const results = await axios.delete(`${process.env.REACT_APP__BACKEND_URL}/otakuzUser/${id}` , {params:query}) ;
    console.log('books after deletion',results);
    await this.setState({watchListData:results.data});
  }

  render() {
    console.log('profile' , this.props.test);
    return (
      <div>
        <h1 id="header" >Watch List</h1>
        <hr></hr>
        <WatchList animeResults={this.state.watchListData} deleteFromWatchList={this.deleteFromWatchList} />

      </div>
    );
  }
}

export default withAuth0(Profile);
