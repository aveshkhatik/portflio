import React from 'react'
import { Outlet } from 'react-router-dom'
import SecondExperience from './components/SecondExperience'

const Experience = () => {
  return (
    <>
      <Outlet />
      <SecondExperience />
    </>
  )
}

export default Experience