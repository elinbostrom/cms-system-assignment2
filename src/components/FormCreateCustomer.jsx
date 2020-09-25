import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import UserKit from '../data/UserKit'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import styled from 'styled-components'


const schema = yup.object().shape({
  name: yup.string().required(),
  organisationNr: yup.number().positive().integer().required(),
  vatNr: yup.string().matches(/^[SE]{2}[0-9]{10}$/i).required(),
  reference: yup.string().required(),
  paymentTerm: yup.number().positive().integer().required(),
  website: yup.string().url().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.number().integer().required(),
})

export default function FormCreateCustomer() {
  const history = useHistory()
  const userKit = new UserKit()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    userKit.createCustomer(data)
      .then(
        userKit.fetchCustomers())
    history.push("/home")
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelWrapper>
        Name
          <input type="text" name="name" ref={register} />
        {errors.name && <p>This is required</p>}
      </LabelWrapper>


      <LabelWrapper>
        Organisation Number
          <input type="text" name="organisationNr" ref={register} />
        {errors.organisationNr && <p>This is required</p>}
      </LabelWrapper>

      <LabelWrapper>
        VAT-number
          <input type="text" name="vatNr" ref={register}
        />
        {errors.vatNr && <p>This field is required and should be like SE9940003332</p>}
      </LabelWrapper>

      <LabelWrapper>
        Reference
          <input type="text" name="reference" ref={register} />
        {errors.reference && <p>This is required</p>}
      </LabelWrapper>

      <LabelWrapper>
        Payment Term
          <input type="text" name="paymentTerm" ref={register} />
        {errors.paymentTerm && <p>This is required</p>}
      </LabelWrapper>

      <LabelWrapper>
        Website
          <input type="text" name="website" ref={register} />
        {errors.website && <p>This is required</p>}
      </LabelWrapper>

      <LabelWrapper>
        Email
          <input type="text" name="email" ref={register} />
        {errors.email && <p>This is required</p>}
      </LabelWrapper>

      <LabelWrapper>
        Phone number
          <input type="text" name="phoneNumber" ref={register} />
        {errors.phoneNumber && <p>This is required</p>}
      </LabelWrapper>

      <button type="submit">Create customer</button>
    </form>
  )
}


const LabelWrapper = styled.label`
display: flex;
flex-direction: column;
`