import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserKit from '../data/UserKit'
import { UserContext } from '../context/UserContext'

export default function NavBarSignedIn() {
  let { activeUser, setActiveUser } = useContext(UserContext)
  const userKit = new UserKit()
  const history = useHistory()

  const handleSignOut = () => {
    userKit.deleteToken()
    history.push("/")
    window.location.reload()
  }

  const handleActiveUser = () => {
    userKit.getActiveUser()
      .then(res => res.json())
      .then(data => setActiveUser(data))
  }

  useEffect(() => {
    handleActiveUser() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav>
      <p>Logo</p>
      <ul>
        <li>
          <Link to="/home">Customers</Link>
        </li>
        <li>
          <button onClick={handleSignOut}>Sign out</button>
        </li>
        {activeUser.firstName && activeUser.lastName && <li>
          <p>Signed in as</p>
          <p>{`${activeUser.firstName} ${activeUser.lastName}`}</p>
          <p>{activeUser.email}</p>
        </li>}
      </ul>
    </nav>
  )
}
