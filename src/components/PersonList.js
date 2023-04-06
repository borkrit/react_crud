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
        <h2 className=''>Persons list</h2>
        <br/>
        <div className="w-9/12 m-auto  bg-green-200 flex gap-2 flex-wrap center justify-center" > 
        {
        persons.map((person) => {
           return  <div key={person.id} className="w-1/5 p-2 border rounded-sm border-violet-600" >
          
            <Link to='/person' state={{person: {...person}}} >  {person.title} </Link>
            </div>
        })
      }

        </div>
      
    </div>
    
  )
}
