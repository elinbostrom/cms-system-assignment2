import React from 'react'
import styled from 'styled-components'

// Styles
import Container from '../styles/Container'
import ImageWrapper from '../styles/ImageWrapper'

export default function ContainerInformation({ title, informationText, sourceUrl, altText }) {
  return (
    <WhiteContainer
      width="800px"
      gridTemplate="auto 1fr / 1fr"
      gap="2em"
    >
      <TextWrapper>
        <h2>{title}</h2>
        <p>{informationText}</p>
      </TextWrapper>
      <ImageWrapperBorder width="100%" height="100%;">
        <img src={sourceUrl} alt={altText} />
      </ImageWrapperBorder>
    </WhiteContainer>
  )
}

const ImageWrapperBorder = styled(ImageWrapper)`
margin: auto;

img{
box-shadow: 1px 1px 3px gray;
border-radius: 10px;
}
`

const TextWrapper = styled.div`
margin: auto;
max-width: 500px;
width: 100%;
`

const WhiteContainer = styled(Container)`
  background: ${props => props.theme.gradientLinearSignedOut};
  color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 3px gray;
  padding: 2em 3em;
  margin: auto;
  align-items: center;
  text-align: center;
`