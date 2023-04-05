import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
import PersonList from '../components/PersonList';

export default function Main() {
  return (
    <>
      <Navbar/>
      <h1> Home page</h1>
      <PersonList />
    
    <Outlet/>
    </>

    
  )
}
