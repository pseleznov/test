import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import BodyContainer from './components/Body/BodyContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
      <div className="wrapper">
          <HeaderContainer currentData={props.currentData} />
        <div className="content-wrapper">
          <Route path='/homepage' render={() => <BodyContainer />} />
        </div>
        <Route path='/homepage' render={() => <Footer />} />
      </div>
  );
}

export default App;
