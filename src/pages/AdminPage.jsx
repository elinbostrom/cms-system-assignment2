import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserKit from '../data/UserKit'

export default function AdminPage() {
  const userKit = new UserKit()
  const [customerList, setCustomerList] = useState([])
  const history = useHistory()

  useEffect(() => {
    fetchCustomerList()
  }, [])

  const fetchCustomerList = () => {
    userKit.fetchClients()
      .then(res => res.json())
      .then(data => {
        setCustomerList(data.results)
      })
  }

  return (
    <div>
      <h1>Admin page</h1>
      <button onClick={() => { history.push("/create-client") }}>Create new client</button>
      <table>
        <thead>
          <tr>
            <th>Client name</th>
            <th>Organisation Number</th>
            <th>Reference</th>
            <th>Read more</th>
          </tr>
        </thead>
        <tbody>
          {customerList && customerList.map(customerItem => {
            return (
              <tr key={customerItem.id}>
                <td>{customerItem.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
