import React from 'react'
import './Skillz.css';

export default class Introduction extends React.Component {
  render() {
    return (
      <div style={{ background: '#4D4D4D', color: '#1985A1' }} className="flex canvas">
        <h1 style={{fontSize: 32}}>Wow such skillz</h1>
        <p style={{fontSize: 24, width: '60%'}}>
        JavaScript
        •	Python
        •	Java
        •	Go	•	React.js
        •	Redux
        •	GraphQL
        •	Apollo	•	SQL
        •	NoSQL
        •	Azure
        •	Docker	•	Node.js
        •	Express.js
        •	Serverless Computing
        •	Progressive Web Apps
        </p>
      </div>
    )
  }
}