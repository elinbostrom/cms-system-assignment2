import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CustomerContext } from '../context/CustomerContext'
import UserKit from '../data/UserKit'

export default function CustomerDetailInformation({ setEditMode, customerId }) {
  const { customerDetails } = useContext(CustomerContext)
  const userKit = new UserKit()
  const history = useHistory()

  const handleDeleteCustomer = () => {
    userKit.deleteCustomer(customerId)
      .then(userKit.fetchCustomers())
      .then(history.push("/home"))
  }

  return (
    <div>
      <h1>{customerDetails.name}</h1>
      <button onClick={handleDeleteCustomer}>Delete customer</button>
      <button onClick={() => { setEditMode(true) }}>Edit customer</button>
      <div>
        <p>Organisation Number: {customerDetails.organisationNr}</p>
        <p>VAT Number: {customerDetails.vatNr}</p>
        <p>Reference: {customerDetails.reference}</p>
        <p>Payment Term: {customerDetails.paymentTerm}</p>
        <p>Website: {customerDetails.website}</p>
        <p>Email: {customerDetails.email}</p>
        <p>Phone Number: {customerDetails.phoneNumber}</p>
      </div>
    </div>
  )
}
