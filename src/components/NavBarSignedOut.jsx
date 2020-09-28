import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../styles/NavBar'
import LogoWhite from '../media/logo-white.png'
import ImageWrapper from '../styles/ImageWrapper'


export default function NavBarSignedOut() {

  return (
    <NavBar background={props => props.theme.nero}
      gradientLinear={props => props.theme.gradientLinearSignedOut}>
      <ImageWrapper width="100px" height="40px">
        <img src={LogoWhite} alt="logotype" />
      </ImageWrapper>
      <NavList>
        <ListItemLink>
          <Link to="/register">Sign up</Link>
        </ListItemLink>
        <ListItemLink>
          <Link to="/login">Sign in</Link>
        </ListItemLink>
      </NavList>
    </NavBar>
  )
}

const NavList = styled.ul`
list-style: none;
display: flex;
`

const ListItemLink = styled.li`
margin: 0 1em;

a {
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.paleRose};
  transition: all 200ms;

  &:hover {
    cursor: pointer;
    color: white;
    text-shadow: 1px 1px 2px black;
  }
}
`
