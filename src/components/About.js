import React from 'react'
import '../App.css';

export default class About extends React.Component {
  render() {
    return (
      <div style={{ background: '#C5C3C6' }} className="canvas flex">
        <h1>About</h1>
        <div style={{ display: 'flex' }}>
          <img src={`${process.env.PUBLIC_URL}/dog.jpg`} alt='my dog' height='384' width='384' style={{ borderRadius: 256 }} />
          <div style={{ marginTop: 'auto', marginBottom: 'auto', padding: 50, width: 400 }}>
            <h3>
              The dog's name is Bodee.
            </h3>
            <p>
              While he has no coding experience, I have multiple years of experience 
              in mostly fullstack roles where I have been able to make big brain decisions 
              that have had positive results. 
            </p>
            <p>
              I have a passion for delivering quality products
              to users that embrace the best practices and strive to break some norms in order to keep users engaged. I also
              have a hatred for spreadsheets being used for everything and it is my life mission to 
              create a world where there will never be a single spreadsheet uploaded to the internet again.
            </p>
          </div>
        </div>
      </div>
    )
  }
}