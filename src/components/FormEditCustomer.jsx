import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from "yup"
import styled from 'styled-components'
import UserKit from '../data/UserKit'
import { CustomerContext } from '../context/CustomerContext'
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
  phoneNumber: yup.number().required(),
})

export default function FormEditCustomer({ setEditMode, handleCustomerDetails, customerId }) {
  const { customerDetails } = useContext(CustomerContext)
  const userKit = new UserKit()

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    userKit.editCustomer(data, customerId)
      .then(userKit.customerDetail(customerId))
      .then(setEditMode(false))
      .then(handleCustomerDetails())
  }

  return (
    <EditForm
      width="700px"
      background={props => props.theme.mintGreen}
      onSubmit={handleSubmit(onSubmit)}>
      <EditFormColumn>

        <LabelWrapper>
          Name
   <InputFields height="30px" type="text" name="name" defaultValue={customerDetails.name} ref={register} />
          {errors.name && <ErrorMessage>This is required</ErrorMessage>}
        </LabelWrapper>


        <LabelWrapper>
          Organisation Number
   <InputFields height="30px" type="text" name="organisationNr" defaultValue={customerDetails.organisationNr} ref={register} />
          {errors.organisationNr && <ErrorMessage>This is required</ErrorMessage>}
        </LabelWrapper>

        <LabelWrapper>
          VAT-number
   <InputFields height="30px" type="text" name="vatNr" defaultValue={customerDetails.vatNr} ref={register}
          />
          {errors.vatNr && <ErrorMessage>This field is required and should be like SE9940003332</ErrorMessage>}
        </LabelWrapper>

        <LabelWrapper>
          Reference
   <InputFields height="30px" type="text" name="reference" defaultValue={customerDetails.reference} ref={register} />
          {errors.reference && <ErrorMessage>This is required</ErrorMessage>}
        </LabelWrapper>
      </EditFormColumn>
      <EditFormColumn>

        <LabelWrapper>
          Payment Term
   <InputFields height="30px" type="text" name="paymentTerm" defaultValue={customerDetails.paymentTerm} ref={register} />
          {errors.paymentTerm && <ErrorMessage>This is required</ErrorMessage>}
        </LabelWrapper>

        <LabelWrapper>
          Website
   <InputFields height="30px" type="text" name="website" defaultValue={customerDetails.website} ref={register} />
          {errors.website && <ErrorMessage>This is required</ErrorMessage>}
        </LabelWrapper>

        <LabelWrapper>
          Email
   <InputFields height="30px" type="text" name="email" defaultValue={customerDetails.email} ref={register} />
          {errors.email && <ErrorMessage>This is required</ErrorMessage>}
        </LabelWrapper>

        <LabelWrapper>
          Phone number
   <InputFields height="30px" type="text" name="phoneNumber" defaultValue={customerDetails.phoneNumber} ref={register} />
          {errors.phoneNumber && <ErrorMessage>This is required</ErrorMessage>}
        </LabelWrapper>
      </EditFormColumn>

      <SubmitButton
        fontSize="medium"
        background={props => props.theme.riptide}
        textColor="white"
        width="100%"
        type="submit">Save customer</SubmitButton>
    </EditForm>
  )
}

const LabelWrapper = styled.label`
display: flex;
font-weight: bold;
flex-direction: column;
`

const EditForm = styled(Form)`
display: grid;
grid-template: 1fr auto / 1fr 1fr;
gap: 1em;

@media (max-width: 400px){
  grid-template: 1fr 1fr auto / 1fr;
}
`

const SubmitButton = styled(Button)`
grid-column: span 2;

@media (max-width: 400px){
  grid-column: unset;
}
`

const EditFormColumn = styled.div`
display: grid;
gap: 1em;
`