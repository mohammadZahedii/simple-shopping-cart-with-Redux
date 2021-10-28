import { RECIEVE_PRODUCTS } from "../constant/actionsTypes";


export const products =(state={},action)=>{
    
    switch (action.type) {
        case RECIEVE_PRODUCTS:
            let newProducts=action.products.reduce((obj,product)=>{
                obj[product.id]=product
                return obj
            },{})
            return{
                ...state,
                ...newProducts
            }
    
        default:
            return state
    }

}