import React from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
//import { products } from '../reducers/products'

function ProductList(props){
console.log(props)
    const {products}=props
    // console.log(products)

    return(
        <div>
            <h3>Products</h3>
            {products.map(product=>{
                return(
                    <ProductItem key={product.id} product={product}/>
                )
            })}
       
        </div>
    )


}


const getProducts=products=>{
   return Object.keys(products).map(id=>products[id])
}

const mapStateToProps=state=>{
    return {
        products:getProducts(state.products)
    }
}

export default connect(mapStateToProps)(ProductList)