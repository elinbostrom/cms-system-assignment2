import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ListCustomers from '../components/ListCustomers'
import { UserContext } from '../context/UserContext'

export default function HomePage() {
  const { activeUser } = useContext(UserContext)
  const history = useHistory()

  return (
    <div>
      <h1>Welcome {activeUser.firstName}</h1>
      <button onClick={() => { history.push("/create-customer") }}>Create new customer</button>
      <ListCustomers />
    </div>
  )
}
