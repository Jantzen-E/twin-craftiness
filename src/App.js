import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

export default class App extends Component {
  render() {
    return(
      <Router>
        <Nav />
          <Switch />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
        <Footer />
      </Router>
    );
  }
}