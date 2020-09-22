import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import UserKit from '../data/UserKit'

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [organisationName, setOrganisationName] = useState("")
  const [organisationKind, setOrganisationKind] = useState("")
  const userKit = new UserKit()
  const history = useHistory()

  const renderInputs = (inputArray) => {
    return (
      inputArray.map((inputElement, index) => {
        return (
          <LabelWrapper key={index}>
            {inputElement[0]}
            <input
              type={inputElement[1]}
              placeholder={inputElement[2]}
              value={inputElement[3]}
              onChange={(e) => { inputElement[4](e.currentTarget.value) }} />
          </LabelWrapper>
        )
      })
    )
  }


  const inputArray = [
    ['Firstname', 'text', 'ex. John...', firstName, setFirstName],
    ['Lastname', 'text', 'ex. Doe...', lastName, setLastName],
    ['Email', 'email', 'ex. mail@outlook.com...', email, setEmail],
    ['Password', 'password', 'ex. ******...', password, setPassword],
    ['Organisation Name', 'text', 'ex. Starbucks...', organisationName, setOrganisationName],
    ['Organisation Kind', 'number', 'ex. 0, 1 , 2...', organisationKind, setOrganisationKind]
  ]

  const handleRegisterUser = () => {
    userKit.register(firstName, lastName, email, password, organisationName, organisationKind)
    history.push("/login")
  }

  return (
    <div>
      <h1>Sign Up Page</h1>
      {renderInputs(inputArray)}
      <button onClick={handleRegisterUser}>Register</button>
    </div>
  )
}


// * Styles
const LabelWrapper = styled.label`
display: flex;
flex-direction: column;`