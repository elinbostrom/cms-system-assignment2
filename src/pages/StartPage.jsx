import React from 'react'
import styled from 'styled-components'

// Media 
import HeroPicture from '../media/background-startpage.jpg'
import CustomerListImage from '../media/customer-list.png'
import EditCustomerImage from '../media/edit-customer.png'
import LogoWhite from '../media/logo-white.png'

// Components
import ButtonRegister from '../components/ButtonRegister'
import ButtonLogin from '../components/ButtonLogin'
import ContainerInformation from '../components/ContainerInformation'
import ImageWrapper from '../styles/ImageWrapper'

export default function StartPage() {

  return (
    <div>
      <Hero>
        <ContentWrapper>
          <LogoWrapper width="300px">
            <img src={LogoWhite} alt="White logotype" />
          </LogoWrapper >
          <ButtonRegister
            signUpText="Create account"
            width="100%"
            background={props => props.theme.paleRose} />

          <ButtonLogin />
        </ContentWrapper>

        <ContainerInformation
          title="Get a overview of your customers"
          informationText="Get a clear overview of all your customers. You can edit and manage them i our magical CRM system."
          sourceUrl={CustomerListImage}
          altText="Overview of system" />
        <ContainerInformation
          title="Edit and manage customers"
          informationText="See specific details about a customer. Edit information and delete from system if neccesary."
          sourceUrl={EditCustomerImage}
          altText="Overview of specific detailpage" />
      </Hero>
    </div >
  )
}


const Hero = styled.header`
background: url(${HeroPicture});
background-size: cover;
background-position: center;
background-attachment: fixed;
width: 100vw;
min-height: 100vh;
padding: 2em;
display: grid;
grid-template: 0.7fr 1fr 1fr / 1fr;
justify-content: center;
align-items: center;

@media (max-width: 400px){
  padding: 150px 2em 0 2em;
}
`

const ContentWrapper = styled.div`
display: grid;
grid-template: 1fr 0.5fr / 1fr 1fr;
gap: 1em;
justify-content: center;
max-width: 600px;
margin: auto;
width: 100%;
`

const LogoWrapper = styled(ImageWrapper)`
margin: auto;
grid-column: span 2;
`