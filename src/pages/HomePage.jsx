import React, { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { CustomerContext } from '../context/CustomerContext'
import { UserContext } from '../context/UserContext'
import UserKit from '../data/UserKit'

export default function HomePage() {
  const userKit = new UserKit()
  const { customerList, setCustomerList } = useContext(CustomerContext)
  const { activeUser } = useContext(UserContext)
  const history = useHistory()


  const fetchCustomerList = () => {
    userKit.fetchCustomers()
      .then(res => res.json())
      .then(data => {
        setCustomerList(data.results)
      })
  }


  useEffect(() => {
    fetchCustomerList() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>Welcome {activeUser.firstName}</h1>
      <button onClick={() => { history.push("/create-customer") }}>Create new customer</button>
      <table>
        <thead>
          <tr>
            <th>Customer name</th>
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
                <td>{customerItem.organisationNr}</td>
                <td>{customerItem.reference}</td>
                <td><Link to={`/customers/${customerItem.id}`}>Click</Link></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
