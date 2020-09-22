import React from 'react'

export default function ActivateUser({ handleActivateUser }) {
  return (
    <div>
      <h1>Activate Page</h1>
      <button onClick={handleActivateUser}>Activate account</button>
    </div>
  )
}
