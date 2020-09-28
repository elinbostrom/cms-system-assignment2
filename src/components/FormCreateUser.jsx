import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import { useHistory } from "react-router-dom";
import * as yup from 'yup'
import styled from "styled-components";
import UserKit from '../data/UserKit'

// Styles
import Form from "../styles/Form";
import InputFields from "../styles/InputFields";
import Button from "../styles/Button";
import ErrorMessage from '../styles/ErrorMessage'

const schema = yup.object().shape({
  firstName: yup.string().required('Firstname is required'),
  lastName: yup.string().required('Lastname is required'),
  email: yup.string().email().required('Email is required (ex. mail@outlook.com)'),
  password: yup.string().min(8).required('Password must be at least 8 characters'),
  organisationName: yup.string().required('Organisation name is required (ex. Spotify)'),
  organisationKind: yup.number().required('Organisation Kind is required'),
});

export default function FormCreateUser() {
  const userKit = new UserKit()
  const history = useHistory()

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    userKit.register(data)
    history.push("/activate")
  }


  return (
    <Form
      width="700px"
      background={props => props.theme.mintGreen}
      onSubmit={handleSubmit(onSubmit)}>
      <LabelWrapper>
        Firstname
      <InputFields height="30px" type="text" name="firstName" ref={register} />
        <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
      </LabelWrapper>

      <LabelWrapper>
        Lastname
      <InputFields height="30px" type="text" name="lastName" ref={register} />
        <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
      </LabelWrapper>

      <LabelWrapper>
        Email
      <InputFields height="30px" type="text" name="email" ref={register} />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </LabelWrapper>

      <LabelWrapper>
        Password
      <InputFields height="30px" type="password" name="password" ref={register} />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </LabelWrapper>

      <LabelWrapper>
        Organisation Name
      <InputFields height="30px" type="text" name="organisationName" ref={register} />
        <ErrorMessage>{errors.organisationName?.message}</ErrorMessage>
      </LabelWrapper>

      <LabelWrapper>
        Organisation Kind
      <Select height="30px" name="organisationKind" ref={register}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </Select>
        <ErrorMessage>{errors.organisationKind?.message}</ErrorMessage>
      </LabelWrapper>

      <Button
        fontSize="medium"
        background={props => props.theme.riptide}
        textColor="white"
        width="100%"
        margin="1em 0"
        type="submit">Register</Button>
    </Form>
  );
}


const LabelWrapper = styled.label`
display: flex;
flex-direction: column;
font-weight: bold;
margin: 0.5em 0;
`;

const Select = styled.select`
border: none;
border-radius: 3px;
box-shadow: 1px 1px 2px gray;
padding: 0.5em;
height: ${props => props.height}
`