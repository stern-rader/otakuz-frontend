import React from 'react';

//created components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './components/Profile/Profile';
import AboutUS from './components/AboutUs/AboutUs';
import AnimeProfile from './components/Main/AnimeProfile';

//route components
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';

class App extends React.Component {


  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <BrowserRouter>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' >
                <Main />
              </Route>
              <Route exact path='/profile'>
                { isAuthenticated &&
                <Profile />
                }
              </Route>
              <Route exact path='/aboutus' >
                <AboutUS />
              </Route>
              <Route exact path='/animeprofile/:id' >
                <AnimeProfile />
              </Route>
            </Switch>
            < Footer />
          </Router>
        </BrowserRouter>
      </>
    );
  }
}

export default withAuth0(App);
