import styled from 'styled-components'

const Container = styled.div`
padding: 1em;
max-width: ${props => props.width};
width: 100%;
display: grid;
grid-template: ${props => props.gridTemplate};
gap: ${props => props.gap};
`

export default Container;