import styled from 'styled-components'

const Container = styled.div`
padding: 1em;
max-width: ${props => props.width};
width: 100%;
display: grid;
grid-template: ${props => props.gridTemplate};
gap: ${props => props.gap};

@media (max-width: 400px){
  grid-template: auto auto 1fr auto / 1fr;
}
`

export default Container;