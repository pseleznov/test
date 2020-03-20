import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';

const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <div className="content-wrapper">
          <Route path='/homepage' render={() => <Body />} />
        </div>
        <Footer />
      </div>
  );
}

export default App;
