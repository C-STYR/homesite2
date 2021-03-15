import React from 'react'

import github from '../public/images/github.png'
import email from '../public/images/email.png'
import linkedin from '../public/images/linkedin.png'

const links: JSX.Element = 
    <div className="linksContainer">
      <img 
      src={github}
      height={40}
      width={40}
      alt="the github icon"
      />
      <img 
      src={email}
      height={40}
      width={40}
      alt="an email icon"
      />
      <img 
      src={linkedin}
      height={40}
      width={40}
      alt="the linked in icon"
      />
    </div>

export default links;