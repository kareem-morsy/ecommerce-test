import React, { useEffect, useState } from 'react'
import Product from './Product';

function ProductList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products , setProducts] = useState([]);
  useEffect(()=>{
    return(
      fetch(api_url).then((res)=>res.json())
      .then((data)=>setProducts(data))
    )
  },[])

  return (
    <>
    <div className='productsList'>
      <div className='container'>
        <h2 className="text-center">Our Products</h2>
        <div className='row'>
          <div className='col-md-4 col-12'>
            <Product ProductInfo={products}/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductList