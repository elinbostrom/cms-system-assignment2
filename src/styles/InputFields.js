import styled from 'styled-components'

const InputFields = styled.input`
border: none;
border-radius: 3px;
box-shadow: 1px 1px 2px gray;
padding: 0.5em;
height: ${props => props.height}
`

export default InputFields;