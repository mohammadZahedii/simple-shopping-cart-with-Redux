import React from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
//import { products } from '../reducers/products'

function ProductList(props){
    const {products,addToCart}=props
     console.log(products)
console.log(props)

    return(
        <div>
            <h3>Products</h3>
            {products.map(product=>{
                return(
                    <ProductItem key={product.id} product={product} addToCart={()=>addToCart(product.id)}/>
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
        products:state.products
    }
}


const mapDispatchToProps=dispatch=>{
    return {
        addToCart: productId=>dispatch(addToCart(productId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList)