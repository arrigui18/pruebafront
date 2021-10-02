import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Games from './components/Games';
import Header from './components/Header';
import GameStreams from './components/GameStreams';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Games} />
        <Route exact path="/game/:id" component={GameStreams} />
      </Router>
    </>
  );
}

export default App;
