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
  constructor(props){
    super(props);
    this.state = {
      img_url:'',
    };
  }

  getAnimeData = (imgUrl) => {
    console.log(imgUrl);
    this.setState({img_url:imgUrl});
  }
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <BrowserRouter>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' >
                <Main addToWatchList={this.addToWatchList} getAnimeData={this.getAnimeData} />
              </Route>
              <Route exact path='/profile'>
                { isAuthenticated &&
                <Profile test={this.test} />
                }
              </Route>
              <Route exact path='/aboutus' >
                <AboutUS />
              </Route>
              <Route exact path='/animeprofile' >
                <AnimeProfile imgUrl={this.state.img_url} />
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
