import React from 'react'
import { useHistory } from 'react-router-dom'

export default function ButtonLogin() {
  const history = useHistory()

  return (
    <button onClick={() => { history.push("/login") }}>Sign in</button>
  )
}
