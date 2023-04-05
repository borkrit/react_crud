import React, { useEffect, useState } from 'react'

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct]= useState('')

    useEffect(()=>{
        fetch('https://retoolapi.dev/TGFQg1/data')
        .then(res=>res.json())
        .then(result => setProducts(result))




       

    },[])



    const handelClick = (id)=>{
      
      
      fetch(`https://retoolapi.dev/TGFQg1/data/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(setProducts(products.filter(product => product.id !== id)));


      console.log(products);

    }

    
    


  return (
    <div>
        <h2>product list</h2>

    <br/>




{
        products.map((product) => {
           return  <div key={product.id}  onClick={()=>handelClick(product.id)}>
            {product.title}
            </div>
        })
    }

    </div>
    
  )
}
