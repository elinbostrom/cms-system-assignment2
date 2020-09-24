import React, { useEffect, useState } from 'react'
import UserKit from '../data/UserKit'

export default function LayoutSimple({ children }) {
  const userKit = new UserKit()
  const token = userKit.getToken
  const [activeUser, setActiveUser] = useState("")

  const handleActiveUser = () => {
    userKit.activeUser()
      .then(res => res.json())
      .then(data => {
        setActiveUser(data)
      })
  }

  useEffect(() => {
    handleActiveUser()
  }, [])

  return (
    <div>
      {token && <nav>
        <a href="#">Logo</a>
        <ul>
          <li>Customers</li>
          <li>Sign out</li>
          {activeUser.firstName && activeUser.lastName && <li>
            <p>Signed in as</p>
            <p>{`${activeUser.firstName} ${activeUser.lastName}`}</p>
            <p>{activeUser.email}</p>
          </li>}
        </ul>
      </nav>}
      {!token && <nav>
        <a href="#">Logo</a>
        <ul>
          <li>Sign up</li>
          <li>Sign in</li>
        </ul>
      </nav>}
      <main>
        {children}
      </main>
      <footer>Foten</footer>
    </div>
  )
}
