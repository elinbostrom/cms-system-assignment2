import React, { useContext, useEffect } from 'react'
import UserKit from '../data/UserKit'
import { CustomerContext } from '../context/CustomerContext'
import { Link } from 'react-router-dom'

export default function ListCustomers() {
  const userKit = new UserKit()
  const { customerList, setCustomerList } = useContext(CustomerContext)

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
  )
}
