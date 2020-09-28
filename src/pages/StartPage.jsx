import React from 'react'
import styled from 'styled-components'

// Media 
import HeroPicture from '../media/background-startpage.jpg'

// Components
import ButtonRegister from '../components/ButtonRegister'
import ButtonLogin from '../components/ButtonLogin'
import ContainerInformation from '../components/ContainerInformation'

export default function StartPage() {

  return (
    <div>
      <Hero>

        <ContentWrapper>
          <HeroTitle>Startpage</HeroTitle>
          <ButtonRegister signUpText="Create account" />
          <ButtonLogin />
        </ContentWrapper>
      </Hero>
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


const Hero = styled.header`
background: url(${HeroPicture});
background-size: cover;
background-position: center;
width: 100vw;
min-height: 400px;
padding: 2em;
display: flex;
justify-content: center;
align-items: center;
`

const ContentWrapper = styled.div`
display: grid;
grid-template: 1fr 0.5fr / 1fr 1fr;
gap: 1em;
justify-content: center;
max-width: 500px;
width: 100%;
`

const HeroTitle = styled.h1`
align-self: flex-end;
color: ${props => props.theme.whisper};
text-shadow: 1px 1px 2px black;
grid-column: span 2;
text-align: center;
`