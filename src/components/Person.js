import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Person() {
    const location = useLocation();
    const {person} = location.state;


    console.log(person)

  return (
    <>
        <Link to='/' > Home </Link> 
        <h1>{person.title}</h1>
        <p>{person.position}</p>
        <img src={person.media} alt={person.title} />
    </>
  )
}
