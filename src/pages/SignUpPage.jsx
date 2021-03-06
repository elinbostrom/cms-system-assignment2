import React from 'react'

// Components
import FormCreateUser from '../components/FormCreateUser'

// Styles
import PlaceMainContent from '../styles/PlaceMainContent'
import Headline from '../styles/Headline'

export default function SignUpPage() {
  return (
    <PlaceMainContent
      background={props => props.theme.whisper}
      flexDirection="column"
    >
      <Headline
        textColor={props => props.theme.nero}
        margin="1em"
      >Sign Up Page</Headline>
      <FormCreateUser />
    </PlaceMainContent>
  )
}
