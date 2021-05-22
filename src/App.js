import React from 'react';

//created components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './components/Profile/Profile';

// import LoginButton from './components/Header/LoginButton';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      test:[],
    };
  }

  addToWatchList = () => {
    this.setState({test:[1,2,3,4]});
    console.log(this.state.test);
  }
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Header />
        {!isAuthenticated &&
          <Main addToWatchList={this.addToWatchList} />
        }
        { isAuthenticated &&
          <Profile test={this.test} />
        }
        < Footer />
      </>
    );
  }
}

export default withAuth0(App);
