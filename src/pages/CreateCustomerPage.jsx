import React from 'react'

// Components
import FormCreateCustomer from '../components/FormCreateCustomer'

// Styles
import PlaceMainContent from '../styles/PlaceMainContent'
import Headline from '../styles/Headline'


export default function CreateCustomerPage() {
  return (
    <PlaceMainContent
      background={props => props.theme.whisper}
      flexDirection="column"
    >
      <Headline
        textColor={props => props.theme.nero}
        margin="1em"
      >Create a new customer</Headline>
      <FormCreateCustomer />
    </PlaceMainContent>
  )
}