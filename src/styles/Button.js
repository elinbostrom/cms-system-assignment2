import styled from 'styled-components'

const Button = styled.button`
font-size: ${props => {
    switch (props.fontSize) {
      case "extraSmall":
        return "9px";
      case "small":
        return "12px";
      case "medium":
        return "16px";
      case "large":
        return "20px";
      default:
        return "16px";
    }
  }};
  padding: 1em 2em;
  background: ${props => props.background};
  color: ${props => props.textColor};
  border: none;
  border-radius: 5px;
  font-weight: 600;
  text-shadow: 1px 1px 2px black;
  box-shadow: 1px 1px 2px gray;
  transition: all ease-in 150ms;
  font-family: 'Montserrat', sans-serif;
  width: ${props => props.width ? props.width : 'max-content'};
  margin: ${props => props.margin ? props.margin : '0'};

  &:hover {
    background: ${props => props.theme.nero};
    color: white;
    cursor: pointer;
  }

  @media(max-width: 400px){
    font-size: 9px;
  }
`

export default Button;