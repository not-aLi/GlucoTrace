import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../MainLayout'
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayout/>}/>
    </Routes>
  )
}

export default Router