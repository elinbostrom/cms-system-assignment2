import React from 'react'
import styled from 'styled-components'

// Components
import ButtonRegister from '../components/ButtonRegister'
import ButtonLogin from '../components/ButtonLogin'
import ContainerInformation from '../components/ContainerInformation'

export default function StartPage() {

  return (
    <div>
      <header>
        <h1>Startpage</h1>
        <div>
          <ButtonRegister signUpText="Create account" />
          <ButtonLogin />
        </div>
      </header>
      <ContainerInformation
        title="Get a overview of your customers"
        informationText="Get a clear overview of all your customers. You can edit and manage them i our magical CRM system."
        sourceUrl="/"
        altText="Overview of system" />
      <ContainerInformation
        title="Edit and manage customers"
        informationText="See specific details about a customer. Edit information and delete from system if neccesary."
        sourceUrl="/"
        altText="Overview of specific detailpage" />
    </div>
  )
}
