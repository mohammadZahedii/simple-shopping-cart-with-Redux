import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList(props){

    const {products}=props
    console.log(products)

    return(
        <div>
            <h3>Products</h3>
            {products && products.map(product=>{
                return(
                    <ProductItem key={product.id} product={product}/>
                )
            })}
       
        </div>
    )


}