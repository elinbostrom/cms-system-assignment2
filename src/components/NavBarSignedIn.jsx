import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import UserKit from '../data/UserKit'
import NavBar from '../styles/NavBar'
import LogoBlack from '../media/logo-black.png'
import ImageWrapper from '../styles/ImageWrapper'

export default function NavBarSignedIn() {
  let { activeUser, setActiveUser } = useContext(UserContext)
  const userKit = new UserKit()
  const history = useHistory()

  const handleSignOut = () => {
    userKit.deleteToken()
    history.push("/")
    window.location.reload()
  }

  const handleActiveUser = () => {
    userKit.getActiveUser()
      .then(res => res.json())
      .then(data => setActiveUser(data))
  }

  useEffect(() => {
    handleActiveUser() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <NavBar background={props => props.theme.riptide}
      gradientLinear={props => props.theme.gradientLinearSignedIn}>
      <ImageWrapper width="100px" height="40px">
        <img src={LogoBlack} alt="logotype" />
      </ImageWrapper>
      <NavList>
        <ListItemLink>
          <Link to="/home">Customers</Link>
        </ListItemLink>
        <ListItemLink>
          <button onClick={handleSignOut}>Sign out</button>
        </ListItemLink>
        {activeUser.firstName && activeUser.lastName && <ListItemLink>
          <p>Signed in as</p>
          <p>{`${activeUser.firstName} ${activeUser.lastName}`}</p>
          <p>{activeUser.email}</p>
        </ListItemLink>}
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
  color: ${props => props.theme.charcoal};
  transition: all 200ms;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.paleRose};
    text-shadow: 1px 1px 2px black;
  }
}
`