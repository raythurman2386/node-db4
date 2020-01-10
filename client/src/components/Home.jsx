import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Welcome to Your Personal</h1>
      <h2>RECIPE BOX</h2>
    </HomeWrapper>
  )
}

export default Home

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
  align-items: center;
`
