import React,{useEffect, useState} from 'react'
import shop from './api/shop'
import ProductList from './components/ProductList'

export default function App(){
 
    const [products,setproducts]=useState()
    useEffect(()=>{
        shop.getProducts((product)=>{
            setproducts(product)
        
        },[])

    })


    return(
        <div>

            <h2>Shopping Cart Example</h2>
            <hr/>
            <ProductList products={products}/>

        </div>
        
    )
}