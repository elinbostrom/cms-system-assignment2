import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../styles/Button'

export default function ButtonRegister({ signUpText, width, background }) {
  const history = useHistory()

  return (
    <Button
      fontSize="medium"
      background={background}
      textColor={props => props.theme.whisper}
      width={width}
      onClick={() => { history.push("/register") }}>{signUpText}</Button>
  )
}
