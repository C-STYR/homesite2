import React from 'react';
import './index.css'
import intro from './intro'
import { sous, la } from './secret'
import links from './links'
import mainImage from './mainImage'

function App(): JSX.Element {
  return (
    <div style={{marginTop: "50px"}}>
      <div className="itemContainer">
        <div >
          {mainImage}
        </div>
        <div >
          {intro}
        </div>
      </div>
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