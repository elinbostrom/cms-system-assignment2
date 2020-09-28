import styled from 'styled-components'

const Headline = styled.h1`
color: ${props => props.textColor};
margin: ${props => props.margin};

@media (max-width: 400px){
  font-size: 24px;
}
`

export default Headline;