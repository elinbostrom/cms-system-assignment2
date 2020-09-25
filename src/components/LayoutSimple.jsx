import React, { useEffect, useContext } from 'react'
import UserKit from '../data/UserKit'
import { UserContext } from '../context/UserContext'

export default function LayoutSimple({ children }) {
  const userKit = new UserKit()
  const token = userKit.getToken()
  let { activeUser, setActiveUser } = useContext(UserContext)

  const handleActiveUser = () => {
    userKit.getActiveUser()
      .then(res => res.json())
      .then(data => setActiveUser(data))
  }

  useEffect(() => {
    handleActiveUser() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {token && <nav>
        <p>Logo</p>
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
        <p>Logo</p>
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
