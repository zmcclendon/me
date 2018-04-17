import React, { Component } from 'react';
import './App.css';
import Introduction from './components/Introduction'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Introduction className="flex"/>
        <section id="about">
        second
        </section>
        <section id="skills">
        next
        </section>
        <section id="contact">
        final
        </section>
      </div>
    );
  }
}

export default App;
