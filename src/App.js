import React from 'react';
import './App.css';
import Introduction from './components/Introduction';
import About from './components/About';
import Skillz from './components/Skillz';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <section className="child" id="intro">
          <Introduction />
        </section>
        <section className="child" id="about">
          <About />
        </section>
        <section className="child" id="skills">
          <Skillz />
        </section>
        <section className="child" id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
