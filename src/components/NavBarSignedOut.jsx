import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarSignedOut() {
  return (
    <nav>
      <p>Logo</p>
      <ul>
        <Link to="/register">Sign up</Link>
        <Link to="/login">Sign in</Link>
      </ul>
    </nav>
  )
}
