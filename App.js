import React,{useEffect, useState} from 'react'
import shop from './api/shop'
import ProductList from './components/ProductList'
import { connect } from 'react-redux'
import {recieveProducts} from './actions'


function App(props){
    console.log(props)
    const {dispatchProducts}=props

    useEffect(()=>{
        shop.getProducts((products)=>{
            dispatchProducts(products)
        },[])

    })


    return(
        <div>

            <h2>Shopping Cart Example</h2>
            <hr/>
            <ProductList/>

        </div>
        
    )
}



const mapDispatchToProps=(dispatch)=>{

    return{
        dispatchProducts:products=>dispatch(recieveProducts(products))
    }
}
export default connect(null,mapDispatchToProps)(App);