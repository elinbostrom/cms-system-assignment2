import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import UserKit from '../data/UserKit'
import styled from 'styled-components';
import { CustomerContext } from '../context/CustomerContext';
import FormEditCustomer from '../components/FormEditCustomer';


export default function CustomerDetailPage(props) {
  const { customerDetails, setCustomerDetails } = useContext(CustomerContext)
  const userKit = new UserKit()
  const customerId = props.match.params.id;
  const history = useHistory()
  const [editMode, setEditMode] = useState(false)

  const handleCustomerDetails = () => {
    userKit.customerDetail(customerId)
      .then(res => res.json())
      .then(data => {
        setCustomerDetails(data);
      })
  }

  useEffect(() => {
    handleCustomerDetails() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDeleteCustomer = () => {
    userKit.deleteCustomer(customerId)
      .then(userKit.fetchCustomers())
      .then(history.push("/home"))
  }

  return (
    <div>
      {!editMode ?
        (
          <>
            <h1>{customerDetails.name}</h1>
            <p>Organisation Number: {customerDetails.organisationNr}</p>
            <p>VAT Number: {customerDetails.vatNr}</p>
            <p>Reference: {customerDetails.reference}</p>
            <p>Payment Term: {customerDetails.paymentTerm}</p>
            <p>Website: {customerDetails.website}</p>
            <p>Email: {customerDetails.email}</p>
            <p>Phone Number: {customerDetails.phoneNumber}</p>
            <button onClick={handleDeleteCustomer}>Delete customer</button>
            <button onClick={() => { setEditMode(true) }}>Edit customer</button>
          </>
        )
        :
        (
          <FormEditCustomer
            setEditMode={setEditMode}
            handleCustomerDetails={handleCustomerDetails}
            customerId={customerId} />
        )
      }
    </div>
  )
}
