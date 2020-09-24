import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import UserKit from '../data/UserKit'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from "yup"
import styled from 'styled-components';
import { CustomerContext } from '../context/CustomerContext';


const schema = yup.object().shape({
  name: yup.string().required(),
  organisationNr: yup.number().positive().integer().required(),
  vatNr: yup.string().matches(/^[SE]{2}[0-9]{10}$/i).required(),
  reference: yup.string().required(),
  paymentTerm: yup.number().positive().integer().required(),
  website: yup.string().url().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.number().positive().integer().required(),
})

export default function CustomerDetailPage(props) {
  const { setCustomerList } = useContext(CustomerContext)
  const userKit = new UserKit()
  const customerId = props.match.params.id;
  console.log("Customer id: " + customerId);
  const [customerDetails, setCustomerDetails] = useState({})
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
    handleCustomerDetails()
  }, [])

  const handleDeleteCustomer = () => {
    userKit.deleteCustomer(customerId)
      .then(userKit.fetchCustomers())
      .then(history.push("/home"))
  }

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    userKit.editCustomer(data, customerId)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .then(userKit.customerDetail(customerId))
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <LabelWrapper>
              Name
           <input type="text" name="name" defaultValue={customerDetails.name} ref={register} />
              {errors.name && <p>This is required</p>}
            </LabelWrapper>


            <LabelWrapper>
              Organisation Number
           <input type="text" name="organisationNr" defaultValue={customerDetails.organisationNr} ref={register} />
              {errors.organisationNr && <p>This is required</p>}
            </LabelWrapper>

            <LabelWrapper>
              VAT-number
           <input type="text" name="vatNr" defaultValue={customerDetails.vatNr} ref={register}
              />
              {errors.vatNr && <p>This field is required and should be like SE9940003332</p>}
            </LabelWrapper>

            <LabelWrapper>
              Reference
           <input type="text" name="reference" defaultValue={customerDetails.reference} ref={register} />
              {errors.reference && <p>This is required</p>}
            </LabelWrapper>

            <LabelWrapper>
              Payment Term
           <input type="text" name="paymentTerm" defaultValue={customerDetails.paymentTerm} ref={register} />
              {errors.paymentTerm && <p>This is required</p>}
            </LabelWrapper>

            <LabelWrapper>
              Website
           <input type="text" name="website" defaultValue={customerDetails.website} ref={register} />
              {errors.website && <p>This is required</p>}
            </LabelWrapper>

            <LabelWrapper>
              Email
           <input type="text" name="email" defaultValue={customerDetails.email} ref={register} />
              {errors.email && <p>This is required</p>}
            </LabelWrapper>

            <LabelWrapper>
              Phone number
           <input type="text" name="phoneNumber" defaultValue={customerDetails.phoneNumber} ref={register} />
              {errors.phoneNumber && <p>This is required</p>}
            </LabelWrapper>

            <button type="submit">Save customer</button>
          </form>
        )
      }
    </div>
  )
}


const LabelWrapper = styled.label`
display: flex;
flex-direction: column;
`