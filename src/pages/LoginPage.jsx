import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserKit from '../data/UserKit'

// * Components
import ActivateUser from "../components/ActivateUser"
import LoginForm from '../components/LoginForm'

export default function LoginPage() {
  const userKit = new UserKit()
  const history = useHistory()
  const params = new URLSearchParams(history.location.search)
  const [uid, setUid] = useState(params.get('uid'))
  const [code, setCode] = useState(params.get('token'))

  const handleActivateUser = () => {
    userKit.activateUser(
      uid, code
    ).then(
      setUid(null),
      setCode(null),
      history.push("/login")
    )
  }


  return (
    <div>
      {uid && code ? (
        <ActivateUser handleActivateUser={handleActivateUser} />
      ) : (
          <LoginForm />
        )
      }
    </div>
  )
}
