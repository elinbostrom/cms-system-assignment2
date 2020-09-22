import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

export default function CreateClientPage() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    console.log(data);
  }

  // const validateVatNr = async (value) => {
  //   if (value === "SE1000000000") return true;

  //   return false;
  // }

  return (
    <div>
      <h1>Create Client Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LabelWrapper>
          Firstname
          <input type="text" name="firstName" ref={register({ required: true })} />
          {errors.firstName && <p>This is required</p>}
        </LabelWrapper>

        <LabelWrapper>
          Lastname
          <input type="text" name="lastName" ref={register({ required: true })} />
          {errors.lastName && <p>This is required</p>}
        </LabelWrapper>

        <LabelWrapper>
          Organisation Number
          <input type="text" name="organisationNr" ref={register({ required: true })} />
          {errors.organisationNr && <p>This is required</p>}
        </LabelWrapper>

        <LabelWrapper>
          VAT-number
          <input type="text" name="vatNr" ref={register({ required: true, pattern: "^(SE)?[0-9]{12}$" })} />
          {errors.vatNr && errors.vatNr.type === "pattern" && (
            <p>This field is required and should be like SE9940003332</p>
          )}
        </LabelWrapper>

        <LabelWrapper>
          Reference
          <input type="text" name="reference" ref={register({ required: true })} />
          {errors.reference && <p>This is required</p>}
        </LabelWrapper>

        <LabelWrapper>
          Payment Term
          <input type="text" name="paymentTerm" ref={register({ required: true })} />
          {errors.paymentTerm && <p>This is required</p>}
        </LabelWrapper>

        <LabelWrapper>
          Website
          <input type="text" name="website" ref={register({ required: true })} />
          {errors.website && <p>This is required</p>}
        </LabelWrapper>

        <LabelWrapper>
          Email
          <input type="text" name="email" ref={register({ required: true })} />
          {errors.email && <p>This is required</p>}
        </LabelWrapper>

        <LabelWrapper>
          Phone number
          <input type="text" name="phoneNumber" ref={register({ required: true })} />
          {errors.phoneNumber && <p>This is required</p>}
        </LabelWrapper>

        <button type="submit">Create client</button>
      </form>
    </div>
  )
}

const LabelWrapper = styled.label`
display: flex;
flex-direction: column;
`