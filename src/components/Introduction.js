import React from 'react'
import '../App.css';

export default class Introduction extends React.Component {
  render() {
    return (
      <div style={{ zIndex: 1, color: 'white', background: '#4C5C68' }} className="flex canvas">
        <h1>WOW! It's Me, Zachary</h1>
        <div style={{display: 'flex'}}>
          <img src={`${process.env.PUBLIC_URL}/me.jpg`} alt='trust me, its supposed to be of me' height='512' width='512' style={{ borderRadius: 256 }} />
          <div style={{marginTop: 'auto', marginBottom: 'auto', padding:100}}>
            <h3>Fullstack as my beard.</h3>
            <h3>And by that I mean I prefer JavaScript.</h3>
            <p>But I can do other stuff, trust me.</p>
          </div>
        </div>
      </div>
    )
  }
}