import React,{useEffect} from 'react'
import shop from './api/shop'


export default function App(){

    useEffect(()=>{
        shop.getProducts((product)=>console.log(product))
        
    },1000)


    return(
        <div>

            <h2>Shopping Cart Example</h2>
            <hr/>

        </div>
        
    )
}