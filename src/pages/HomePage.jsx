import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ListCustomers from '../components/ListCustomers'
import { UserContext } from '../context/UserContext'
import PlaceMainContent from '../styles/PlaceMainContent'
import Container from '../styles/Container'
import Button from '../styles/Button'
import styled from 'styled-components'
import Headline from '../styles/Headline'

export default function HomePage() {
  const { activeUser } = useContext(UserContext)
  const history = useHistory()

  return (
    <PlaceMainContent
      background={props => props.theme.whisper}
      flexDirection="column"
    >
      <Headline
        margin="1em"
      >Welcome {activeUser.firstName}</Headline>
      <Container
        width="700px"
        gridTemplate="auto 1fr / 1fr"
        gap="1em">
        <CreateCustomerButton
          fontSize="small"
          background={props => props.theme.riptide}
          textColor="white"
          onClick={() => { history.push("/create-customer") }}>
          Create new customer
          </CreateCustomerButton>
        <ListCustomers />
      </Container>
    </PlaceMainContent>
  )
}

const CreateCustomerButton = styled(Button)`
margin-left: auto;
`