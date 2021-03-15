import React from 'react'

import email from '../public/images/email 24 white.png'

const links = (): JSX.Element => {
  return (
    <div className="links">
      <img 
      src={email}
      alt="an email icon"
      />
    </div>
  )
}

export default links;