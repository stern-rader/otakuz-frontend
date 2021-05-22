import React from 'react';

//created components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './components/Profile/Profile';

// import LoginButton from './components/Header/LoginButton';

class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Header />
        {!isAuthenticated &&
          <Main />
        }
        { isAuthenticated &&
          <Profile />
        }
        < Footer />
      </>
    );
  }
}

export default withAuth0(App);
