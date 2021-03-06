import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CustomerContext } from '../context/CustomerContext'
import styled from 'styled-components'
import UserKit from '../data/UserKit'

// Styles
import Button from '../styles/Button'
import Container from '../styles/Container'


export default function CustomerDetailInformation({ setEditMode, customerId }) {
  const { customerDetails } = useContext(CustomerContext)
  const userKit = new UserKit()
  const history = useHistory()

  const handleDeleteCustomer = () => {
    userKit.deleteCustomer(customerId)
      .then(userKit.fetchCustomers())
      .then(history.push("/home"))
  }

  return (
    <Container
      width="700px"
      gridTemplate="1fr auto / 1fr 1fr"
      gap="1em"
    >

      <Button
        fontSize="small"
        background={props => props.theme.errorRed}
        width="100%"
        textColor="white"
        onClick={handleDeleteCustomer}>
        Delete customer
            </Button>

      <Button
        fontSize="small"
        background={props => props.theme.riptide}
        width="100%"
        textColor="white"
        onClick={() => { setEditMode(true) }}>Edit customer</Button>
      <CustomerInfoContainer>

        <CustomerInfoColumn>
          <InfoPart>
            <InfoTitle>Organisation Number:</InfoTitle>
            <p>{customerDetails.organisationNr}</p>

          </InfoPart>
          <InfoPart>
            <InfoTitle>VAT Number:</InfoTitle>
            <p>{customerDetails.vatNr}</p>

          </InfoPart>
          <InfoPart>
            <InfoTitle>Reference:</InfoTitle>
            <p>{customerDetails.reference}</p>

          </InfoPart>
          <InfoPart>
            <InfoTitle>Payment Term:</InfoTitle>
            <p>{customerDetails.paymentTerm}</p>

          </InfoPart>
        </CustomerInfoColumn>
        <CustomerInfoColumn>
          <InfoPart>
            <InfoTitle>Website:</InfoTitle>
            <LinkWebsite href={customerDetails.website}>{customerDetails.website}</LinkWebsite>

          </InfoPart>
          <InfoPart>
            <InfoTitle>Email:</InfoTitle>
            <p>{customerDetails.email}</p>

          </InfoPart>
          <InfoPart>
            <InfoTitle>Phone Number:</InfoTitle>
            <p>{customerDetails.phoneNumber}</p>

          </InfoPart>
        </CustomerInfoColumn>

      </CustomerInfoContainer>
      <Button
        fontSize="small"
        background={props => props.theme.nero}
        textColor="white"
        margin="1em"
        onClick={() => history.push("/home")}>
        Go back to customers
        </Button>
    </Container>
  )
}


const CustomerInfoColumn = styled.div`
display: grid;
gap: 1em;
`

const InfoPart = styled.div`
display: flex;
flex-direction: column;
`

const CustomerInfoContainer = styled(Container)`
grid-column: span 2;
padding: 2em 3em;
background: white;
box-shadow: 1px 1px 3px gray;
border-radius: 5px;
display: grid;
grid-template: 1fr / 1fr 1fr;

@media (max-width: 400px){
  grid-column: unset;
  padding: 1em 2em;
  grid-template: unset;
}
`

const InfoTitle = styled.label`
font-weight: bold;
font-size: 16px;
`

const LinkWebsite = styled.a`
color: ${props => props.theme.riptide};
`