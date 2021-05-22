import React from 'react';

//created components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Test from './components/Footer/Footer';

class App extends React.Component{
  render(){
    return(
      <>
        <Header />
        <Main />
        <Test />
      </>
    );
  }
}

export default App ;
