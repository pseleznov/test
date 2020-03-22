import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import BodyContainer from './components/Body/BodyContainer';

const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <div className="content-wrapper">
          <Route path='/homepage' render={() => <BodyContainer />} />
        </div>
        <Route path='/homepage' render={() => <Footer />} />
      </div>
  );
}

export default App;
