import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import UserKit from '../data/UserKit'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import PlaceMainContent from '../styles/PlaceMainContent'
import InputFields from '../styles/InputFields'
import Form from '../styles/Form'
import Button from '../styles/Button'

const schema = yup.object().shape({
  email: yup.string().email().required('Please fill in email'),
  password: yup.string().min(8).required('Please fill in password'),
})

export default function FormLogin() {
  const userKit = new UserKit()
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })


  const onSubmit = (data) => {
    userKit.login(data)
      .then(async res => {
        const data = await res.json()

        if (!res.ok) {
          const error = (data && data.message) || res.status
          return Promise.reject(error)
        }

        userKit.setToken(data.token)
        history.push("/home")

      })
      .catch(error => {
        alert('Wrong email or password, try again or create new account.', error)
        window.location.reload()
      })
  }

  return (
    <PlaceMainContent
      background={props => props.theme.paleRose}
      flexDirection="column">
      <h1>Login</h1>
      <Form
        width="500px"
        background="white"
        onSubmit={handleSubmit(onSubmit)}>
        <LabelWrapper>
          Email
        <InputFields height="30px" type="email" name="email" ref={register} />
          <p>{errors.email?.message}</p>
        </LabelWrapper>
        <LabelWrapper>
          Password
        <InputFields height="30px" type="password" name="password" ref={register} />
          <p>{errors.password?.message}</p>
        </LabelWrapper>
        <Button
          fontSize="medium"
          background={props => props.theme.purpleTaupe}
          textColor={props => props.theme.paleRose}
          width="100%"
          margin="1em 0"
          type="submit">Login</Button>
      </Form>
    </PlaceMainContent>
  )
}

const LabelWrapper = styled.label`
display: flex;
flex-direction: column;
margin: 1em 0;
`