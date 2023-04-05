import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
import ProductList from '../components/ProductList';

export default function Main() {
  return (
    <div>
      <Navbar/>


    <h1> Home page</h1>

    <ProductList />



<Outlet/> 
    </div>

    
  )
}
