import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup'
import styled from "styled-components";
import UserKit from '../data/UserKit'
import { useHistory } from "react-router-dom";

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
    history.push("/login")
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelWrapper>
        Firstname
      <input type="text" name="firstName" ref={register} />
        <p>{errors.firstName?.message}</p>
      </LabelWrapper>

      <LabelWrapper>
        Lastname
      <input type="text" name="lastName" ref={register} />
        <p>{errors.lastName?.message}</p>
      </LabelWrapper>

      <LabelWrapper>
        Email
      <input type="text" name="email" ref={register} />
        <p>{errors.email?.message}</p>
      </LabelWrapper>

      <LabelWrapper>
        Password
      <input type="password" name="password" ref={register} />
        <p>{errors.password?.message}</p>
      </LabelWrapper>

      <LabelWrapper>
        Organisation Name
      <input type="text" name="organisationName" ref={register} />
        <p>{errors.organisationName?.message}</p>
      </LabelWrapper>

      <LabelWrapper>
        Organisation Kind
      <select name="organisationKind" ref={register}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <p>{errors.organisationKind?.message}</p>
      </LabelWrapper>

      <button type="submit">Register</button>
    </form>
  );
}


const LabelWrapper = styled.label`
display: flex;
flex-direction: column
`;