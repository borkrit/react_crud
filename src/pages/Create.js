import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal';
import Navbar from '../components/Navbar'




function Create() {

  const [newProduct, setNewProduct]= useState('');
  const [modal, setModal] = useState(false)


  const addProduct = ()=>{
    fetch('https://retoolapi.dev/kXWstu/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: newProduct,
        
      })
    })
    .then(res => {
      res.json();
      setModal(prev => !prev);

      setTimeout(()=>{
        setModal(prev=>!prev)
      },6000)
      
    }
    )
    
    
  }





  return (
    <div>
      <Navbar />
      
      
      Create

      <input type='text' onChange={(e)=> setNewProduct(e.target.value)}  />
        <button onClick={addProduct}>Add </button>

  {modal ? <Modal prod={newProduct} /> : null}


    </div>
  )
}

export default Create