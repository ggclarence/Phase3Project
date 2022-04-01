import React from 'react';
import Content from '../../pages/Content';
import Header from '../Header/Header';
import NavBar from '../Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Content />
    </div>  
  );
}

export default App;
