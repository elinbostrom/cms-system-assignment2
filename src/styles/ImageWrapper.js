import styled from 'styled-components'

const ImageWrapper = styled.div`
max-width: ${props => props.width};
max-height: ${props => props.height};
object-fit: contain; 

img {
  width: 100%;
  heigth: 100%;
}
`

export default ImageWrapper;