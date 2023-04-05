import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [persons, setPersons] = useState([]);
    const [newProduct, setNewProduct]= useState('')

    useEffect(()=>{
        fetch('https://retoolapi.dev/kXWstu/data')
        .then(res=>res.json())
        .then(result => setPersons(result))
    },[])


    

    const handelClick = (id)=>{
      fetch(`https://retoolapi.dev/TGFQg1/data/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(setPersons(persons.filter(person => person.id !== id)));
    }

  return (
    <div>
        <h2>Persons list</h2>
        <br/>
        <div style={{display:'flex', flexWrap:'wrap', gap:'20px'}}> 
        {
        persons.map((person) => {
           return  <div key={person.id} style={{width:'200px',padding:'10px', border:'1px solid black', borderRadius:'10px'}} >
          
            <Link to='/person' state={{person: {...person}}} >  {person.title} </Link>
            </div>
        })
      }

        </div>
      
    </div>
    
  )
}
