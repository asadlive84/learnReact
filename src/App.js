import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/Home';
import About from './components/AboutUs';
import Contact from './components/ContactUs';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/about/" component={About}/>
          <Route path="/contact/" component={Contact}/>
          <Footer/>
        </Router>
      </div>
    )
  }
}

export default App
