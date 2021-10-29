import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import { checkout } from '../actions'


function Cart(props){


const {products,total,dispatchCheckout}=props
console.log(products)

const hasProducts =products.length > 0
const nodes = hasProducts ?(
    products.map(product=>(
        <Product style={{marginBottom:'20px'}} key={product.id} {...product}/>
    ))
):(
    <em>please add some products to cart.</em>
)
    return(
        <div>
            <h3>Your Cart</h3>
            <div>{nodes}</div>
            <p>Total: ${total}</p>
            <button
                disabled={hasProducts?'':'disabled'}
                onClick={dispatchCheckout}
            >Checkout</button>
        </div>
    )
}


const getCartProducts =(state)=>{

    return state.cart.addedIds.map(id=>({
        ...state.products[id-1],
        quantity:(state.cart.quantityById[id] || 0)
    }))

}


const getTotal=(state)=>{
    return state.cart.addedIds.reduce((total,id)=>total + state.products[id-1].price * (state.cart.quantityById[id] || 0),0).toFixed(2)
}


const mapStateToProps=state=>{

    return{
        products:getCartProducts(state),
        total:getTotal(state)
    }

}


const mapDispatchToProps=dispatch=>{
    return{
        dispatchCheckout:()=>dispatch(checkout())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)