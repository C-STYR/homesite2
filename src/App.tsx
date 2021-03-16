import React from 'react';
import './index.css'
import intro from './intro'
import { sous, la } from './secret'
import links from './links'

function App(): JSX.Element {
  return (
    <div style={{marginTop: "130px"}}>
      <h2 style={{textAlign: "center"}}>Hi there.</h2>
      <br />
      {intro}
      <br />
      <div className="linksContainer">
       {links}
      </div>
      <div className="message">
        <div style={{marginTop: "80px"}} className="message">
          {sous}
        </div>
        <div className="message" style={{marginBottom: "60px"}}>
          {la}
        </div>
      </div>
    </div>
  )
}

export default App;