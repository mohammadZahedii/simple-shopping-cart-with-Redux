import * as types from './../constant/actionsTypes'

export const recieveProducts=(products)=>{

    return{
        type:types.RECIEVE_PRODUCTS,
        products
    }
}