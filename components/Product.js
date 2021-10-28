
import React from 'react'

export default function Product(props){
    const{title,inventory,price}=props
    return(
        <div>
            {title} - ${price} * {inventory}
        </div>

    )
}