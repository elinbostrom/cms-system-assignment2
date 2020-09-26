import React from 'react'
import UserKit from '../data/UserKit'
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
      <footer>Foten</footer>
    </div>
  )
}
