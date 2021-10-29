import * as types from './../constant/actionsTypes'

export const recieveProducts=(products)=>{

    return{
        type:types.RECIEVE_PRODUCTS,
        products
    }
}


export const addToCart = productId =>{
    return{
        type:types.ADD_TO_CART,
        productId
    }
}


export const checkout =()=>{
    return{
        type:types.ADD_CHECKOUT
    }
}