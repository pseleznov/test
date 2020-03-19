import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="wrapper">
        <Header />
        <Body />
        <Footer />
    </div>
  );
}

export default App;
