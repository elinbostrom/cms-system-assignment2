import React from 'react'
import styled from 'styled-components'
import UserKit from '../data/UserKit'

// Components
import NavBarSignedIn from './NavBarSignedIn'
import NavBarSignedOut from './NavBarSignedOut'

export default function LayoutSimple({ children }) {
  const userKit = new UserKit()
  const token = userKit.getToken()

  return (
    <div>
      {token && <NavBarSignedIn />}
      {!token && <NavBarSignedOut />}
      <main>
        {children}
      </main>
      <Footer>Project by Elin Boström</Footer>
    </div>
  )
}


const Footer = styled.footer`
position: fixed;
z-index: 10;
bottom: 0;
width: 100vw;
background: ${props => props.theme.nero};
background: ${props => props.theme.gradientLinearSignedOut};
padding: 0.5em;
color: white;
font-style: italic;
font-size: 12px;
text-align: center;
`