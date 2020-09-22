import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import UserKit from '../data/UserKit'

export default function LoginForm() {
  const userKit = new UserKit()
  const history = useHistory()
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const handleLogin = () => {
    userKit.login(
      loginEmail, loginPassword
    ).then(res => res.json())
      .then(data => {
        userKit.setToken(data.token)
        history.push("/home")
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <LabelWrapper>
        Email
        <input type="email" value={loginEmail} onChange={(e) => { setLoginEmail(e.currentTarget.value) }} />
      </LabelWrapper>
      <LabelWrapper>
        Password
        <input type="password" value={loginPassword} onChange={(e) => { setLoginPassword(e.currentTarget.value) }} />
      </LabelWrapper>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

const LabelWrapper = styled.label`
display: flex;
flex-direction: column;
`