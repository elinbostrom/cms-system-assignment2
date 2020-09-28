import styled from 'styled-components'

const PlaceMainContent = styled.div`
min-height: 100vh;
background: ${props => props.background};
display: flex;
flex-direction: ${props => props.flexDirection};
width: 100vw;
justify-content: center;
align-items: center;

@media (max-width: 400px){
  padding-top: 200px;
}
`;

export default PlaceMainContent;