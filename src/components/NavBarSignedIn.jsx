import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import UserKit from '../data/UserKit'

// Styles
import NavBar from '../styles/NavBar'
import ImageWrapper from '../styles/ImageWrapper'
import Button from '../styles/Button'

// Media
import LogoBlack from '../media/logo-black.png'

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
          <Button
            fontSize="small"
            background={props => props.theme.nero}
            textColor="white"
            onClick={handleSignOut}>Sign out</Button>
        </ListItemLink>
        {activeUser.firstName && activeUser.lastName && <ListItemLink>
          <ActiveUserInfo
            fontSize="12px"
            fontWeight="thin"
          >Signed in as
          </ActiveUserInfo>
          <ActiveUserInfo
            fontSize="14px"
            fontWeight="bold"
          >{`${activeUser.firstName} ${activeUser.lastName}`}
          </ActiveUserInfo>
          <ActiveUserInfo
            fontSize="12px"
            fontWeight="thin"
          >{activeUser.email}
          </ActiveUserInfo>
        </ListItemLink>}
      </NavList>
    </NavBar>
  )
}


const NavList = styled.ul`
list-style: none;
display: flex;
align-items: center;

@media (max-width: 400px){
flex-direction: column;
padding: 0;
}
`

const ListItemLink = styled.li`
margin: 0 1em;

@media (max-width: 400px){
  margin: 0.5em 0 0 0;
}

a {
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.nero};
  transition: all 200ms;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.paleRose};
    text-shadow: 1px 1px 2px black;
  }

}
`

const ActiveUserInfo = styled.p`
font-weight: ${props => props.fontWeight};
font-size: ${props => props.fontSize};
text-align: center;
color: ${props => props.theme.nero};

@media (max-width: 400px){
  display: none;
}
`