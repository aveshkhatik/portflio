import React from 'react'
import { Outlet } from 'react-router-dom'
import SecondContact from './components/SecondContact'

const Contact = () => {
  return (
    <>
      <Outlet />
      <SecondContact />
    </>
  )
}

export default Contact