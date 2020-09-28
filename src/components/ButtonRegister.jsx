import React from 'react'
import { useHistory } from 'react-router-dom'

export default function ButtonRegister({ signUpText }) {
  const history = useHistory()

  return (
    <button onClick={() => { history.push("/register") }}>{signUpText}</button>
  )
}
