import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../styles/Button'

export default function ButtonRegister({ signUpText }) {
  const history = useHistory()

  return (
    <Button
      fontSize="medium"
      background={props => props.theme.paleRose}
      textColor={props => props.theme.whisper}
      onClick={() => { history.push("/register") }}>{signUpText}</Button>
  )
}
