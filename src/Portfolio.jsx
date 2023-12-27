import React from 'react'
import { Outlet } from 'react-router-dom'
import SecondPortfolio from './components/SecondPortfolio'

const Portfolio = () => {
  return (
    <>
      <Outlet/>
      <SecondPortfolio />
    </>
  )
}

export default Portfolio