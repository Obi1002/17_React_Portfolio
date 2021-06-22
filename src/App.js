import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Testimonials from  './components/testimonials';
import ContactUs from './components/contactUs';
import Footer from './components/footer';
import resumeData from './resumeData';
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul id="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
          </ul>
        </nav>
      <Switch>
      <Route path="/about">
        <About resumeData={resumeData}/>
      </Route>
      <Route path="/resume">
        <Resume resumeData={resumeData}/>
      </Route>
      <Route path="/portfolio">
        <Portfolio resumeData={resumeData}/>
      </Route>
      <Route path="/testimonials">
        <Testimonials resumeData={resumeData}/>
      </Route>
      <Route path="/">
        <About resumeData={resumeData}/>
      </Route>
      </Switch>
        <Footer resumeData={resumeData}/>
      </Router>
    ); 
      // <div className="App"> 
      //   <Header resumeData={resumeData}/>
      //   <About resumeData={resumeData}/>
      //   <Resume resumeData={resumeData}/>
      //   <Portfolio resumeData={resumeData}/>
      //   <Testimonials resumeData={resumeData}/>
      //   <ContactUs resumeData={resumeData}/>
      //   <Footer resumeData={resumeData}/>
      // </div>
  }
}

export default App;
