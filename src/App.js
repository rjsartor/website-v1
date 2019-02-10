import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import LandingScreen from './components/landing-screen';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar sliding={true}/>
        <LandingScreen />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
