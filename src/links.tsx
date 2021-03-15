import React from 'react'

import github from '../public/images/github.png'
import email from '../public/images/email.png'
import linkedin from '../public/images/linkedin.png'

const links: JSX.Element = 
    <div className="linksContainer">
      <a href="https://github.com/C-STYR">
        <img 
        src={github}
        height={40}
        width={40}
        alt="the github icon"
        />
      </a>
      <a href="mailto:colestyron@gmail.com">
        <img 
        src={email}
        height={40}
        width={40}
        alt="an email icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/cole-styron/">
        <img 
        src={linkedin}
        height={40}
        width={40}
        alt="the linked in icon"
        />
      </a>
    </div>

export default links;