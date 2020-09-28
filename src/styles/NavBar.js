import styled from 'styled-components'

const NavBar = styled.nav`
background: ${props => props.background};
background: ${props => props.gradientLinear};
position: fixed;
top: 0;
width: 100vw;
display: flex;
padding: 1.5em 2em;
box-shadow: 1px 1px 2px gray;
justify-content: space-between;
align-items: center;
z-index: 10;
`

export default NavBar;