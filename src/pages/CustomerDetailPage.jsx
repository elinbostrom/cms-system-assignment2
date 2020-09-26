import React, { useEffect, useState, useContext } from 'react'
import UserKit from '../data/UserKit'
import styled from 'styled-components';
import { CustomerContext } from '../context/CustomerContext';
import FormEditCustomer from '../components/FormEditCustomer';
import CustomerDetailInformation from '../components/CustomerDetailInformation';


export default function CustomerDetailPage(props) {
  const { setCustomerDetails } = useContext(CustomerContext)
  const userKit = new UserKit()
  const customerId = props.match.params.id;
  const [editMode, setEditMode] = useState(false)

  const handleCustomerDetails = () => {
    userKit.customerDetail(customerId)
      .then(res => res.json())
      .then(data => {
        setCustomerDetails(data);
      })
  }

  useEffect(() => {
    userKit.customerDetail(customerId)
    handleCustomerDetails() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {!editMode ?
        (
          <CustomerDetailInformation
            setEditMode={setEditMode}
            customerId={customerId} />
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
