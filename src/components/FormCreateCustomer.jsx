import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import UserKit from '../data/UserKit'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import styled from 'styled-components'
import Form from '../styles/Form'
import Button from '../styles/Button'
import InputFields from '../styles/InputFields'
import ErrorMessage from '../styles/ErrorMessage'


const schema = yup.object().shape({
  name: yup.string().required(),
  organisationNr: yup.number().positive().integer().required(),
  vatNr: yup.string().matches(/^[SE]{2}[0-9]{10}$/i).required(),
  reference: yup.string().required(),
  paymentTerm: yup.number().positive().integer().required(),
  website: yup.string().url().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/).required(),
})

export default function FormCreateCustomer() {
  const history = useHistory()
  const userKit = new UserKit()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    userKit.createCustomer(data)
      .then(userKit.fetchCustomers())
      .then(history.push("/home"))
  }


  return (
    <Form
      width="700px"
      background={props => props.theme.mintGreen}
      onSubmit={handleSubmit(onSubmit)}>
      <LabelWrapper>
        Company Name
          <InputFields height="30px" type="text" name="name" ref={register} />
        {errors.name && <ErrorMessage>This is required</ErrorMessage>}
      </LabelWrapper>


      <LabelWrapper>
        Organisation Number
          <InputFields height="30px" type="text" name="organisationNr" ref={register} />
        {errors.organisationNr && <ErrorMessage>This is required</ErrorMessage>}
      </LabelWrapper>

      <LabelWrapper>
        VAT-number
          <InputFields height="30px" type="text" name="vatNr" ref={register}
        />
        {errors.vatNr && <ErrorMessage>This field is required and should be like SE9940003332</ErrorMessage>}
      </LabelWrapper>

      <LabelWrapper>
        Reference
          <InputFields height="30px" type="text" name="reference" ref={register} />
        {errors.reference && <ErrorMessage>This is required</ErrorMessage>}
      </LabelWrapper>

      <LabelWrapper>
        Payment Term (Days)
          <InputFields height="30px" type="text" name="paymentTerm" ref={register} />
        {errors.paymentTerm && <ErrorMessage>This is required</ErrorMessage>}
      </LabelWrapper>

      <LabelWrapper>
        Website
          <InputFields height="30px" type="text" name="website" ref={register} />
        {errors.website && <ErrorMessage>This is required</ErrorMessage>}
      </LabelWrapper>

      <LabelWrapper>
        Email
          <InputFields height="30px" type="text" name="email" ref={register} />
        {errors.email && <ErrorMessage>This is required</ErrorMessage>}
      </LabelWrapper>

      <LabelWrapper>
        Phone number
          <InputFields height="30px" type="text" name="phoneNumber" ref={register} />
        {errors.phoneNumber && <ErrorMessage>This is required</ErrorMessage>}
      </LabelWrapper>

      <Button
        fontSize="medium"
        background={props => props.theme.riptide}
        textColor="white"
        width="100%"
        margin="1em 0"
        type="submit">Create customer</Button>
    </Form>
  )
}


const LabelWrapper = styled.label`
display: flex;
flex-direction: column;
font-weight: bold;
margin: 1em;
`