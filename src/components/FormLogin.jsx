import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import UserKit from '../data/UserKit'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'

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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LabelWrapper>
          Email
        <input type="email" name="email" ref={register} />
          <p>{errors.email?.message}</p>
        </LabelWrapper>
        <LabelWrapper>
          Password
        <input type="password" name="password" ref={register} />
          <p>{errors.password?.message}</p>
        </LabelWrapper>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

const LabelWrapper = styled.label`
display: flex;
flex-direction: column;
`