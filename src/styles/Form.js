import styled from 'styled-components'

const Form = styled.form`
max-width: ${props => props.width};
width: 100%;
background: ${props => props.background};
box-shadow: 1px 1px 3px gray;
padding: 2em 3em;
border-radius: 5px;
margin: 1em;
`

export default Form;