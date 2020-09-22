import React from 'react'
import { useHistory } from 'react-router-dom'

export default function StartPage() {
  const history = useHistory()

  return (
    <div>
      <h1>Startpage</h1>
      <button onClick={() => { history.push("/register") }}>Sign up</button>
    </div>
  )
}
