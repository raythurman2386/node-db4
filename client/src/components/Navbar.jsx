import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavWrapper>
      <h1>RECIPES!!!!!!!!</h1>
      <NavLinkWrapper>
        <div>Home</div>
        <div>Recipes</div>
        <div>Add Recipe</div>
      </NavLinkWrapper>
    </NavWrapper>
  )
}

export default Navbar

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #333;
  color: white;
  margin: 0 auto;
  padding: 1rem 0;
  height: 10vh;
`

const NavLinkWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`
