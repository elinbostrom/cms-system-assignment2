import React from 'react'
import Headline from '../styles/Headline'
import PlaceMainContent from '../styles/PlaceMainContent'

export default function ActivateMessagePage() {
  return (
    <PlaceMainContent
      background={props => props.theme.whisper}
      flexDirection="column">
      <Headline textColor={props => props.theme.nero} margin="1em">
        Please check your mailbox to activate account
      </Headline>

    </PlaceMainContent >
  )
}
