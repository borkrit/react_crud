import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FcBusinessContact } from "react-icons/fc";

export default function Person() {
    const location = useLocation();
    const {person} = location.state;


    console.log(person)

  return (
    <>
        <Link to='/' > Home </Link> 
        <h1>{person.title}</h1>
        <p>{person.position}</p>
        {
          person.pictures?.src ? <img src={person.pictures.src} alt={person.title} /> : <FcBusinessContact style={{fontSize:"60px"}} />
        }
        
    </>
  )
}
