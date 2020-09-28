import React from 'react'
import Button from '../styles/Button'
import Headline from '../styles/Headline'
import PlaceMainContent from '../styles/PlaceMainContent'

export default function ActivateUser({ handleActivateUser }) {
  return (
    <PlaceMainContent
      background={props => props.theme.whisper}
      flexDirection="column">
      <Headline
        textColor={props => props.theme.nero}
        margin="1em">
        Activate Page
        </Headline>
      <Button
        fontSize="medium"
        background={props => props.theme.riptide}
        textColor="white"
        onClick={handleActivateUser}>
        Activate account
         </Button>
    </PlaceMainContent>
  )
}
