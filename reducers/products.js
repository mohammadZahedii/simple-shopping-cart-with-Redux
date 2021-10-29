import { ADD_TO_CART, RECIEVE_PRODUCTS } from "../constant/actionsTypes";


export const products =(state=[],action)=>{
    
    switch (action.type) {
        case RECIEVE_PRODUCTS:
            // let newProducts=action.products.reduce((obj,product)=>{
            //     obj[product.id]=product
            //     return obj
            // },{})
            // return{
            //     ...state,
            //     ...newProducts
            // }
            return action.products
        case ADD_TO_CART:
            let {productId}=action
            let product = state[productId-1]
            let recordIndex=state.findIndex(x=>x.id == productId)
            let newProduct={...product,inventory:product.inventory-1}
            state[recordIndex]=newProduct
           
                return [...state]
                // return [
                //     ...state,
                //     state[productId-1]={...newProduct}

                
                // ]
            // return{
            //     ...state,
            //     [productId]:{
            //        ...product,
            //        inventory:product.inventory-1 
            //     }
            // }
        default:
            return state
    }

}