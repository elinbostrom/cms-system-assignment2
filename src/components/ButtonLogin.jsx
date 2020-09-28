import React from 'react'
import { useHistory } from 'react-router-dom'

// Styles
import Button from '../styles/Button'

export default function ButtonLogin() {
  const history = useHistory()

  return (
    <Button
      fontSize="medium"
      background={props => props.theme.purpleTaupe}
      textColor={props => props.theme.whisper}
      width="100%"
      onClick={() => { history.push("/login") }}>Sign in</Button>
  )
}
