import styled from 'styled-components'

const ErrorMessage = styled.p`
color: ${props => props.theme.errorRed};
font-style: italic;
text-transform: capitalize;
font-weight: 400;
font-size: 12px;
`

export default ErrorMessage;