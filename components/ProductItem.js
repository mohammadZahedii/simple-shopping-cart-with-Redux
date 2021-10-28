import React from 'react'
import Product from './Product'

export default function ProductItem(props){


    const {product}=props
    return(
        <div style={{marginBottom:'20px'}}>
            <Product {...product}/>
            <button disabled={product.inventory > 0 ? '':'disabled'}> 
                {product.inventory > 0 ? 'Add to cart':'Sold Out'}
            </button>
        </div>
    )


}