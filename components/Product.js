
import React from 'react'

export default function Product(props){
    const{title,quantity,price,...other}=props
    return(
        <div {...other}>
            {title} - ${price} * {quantity}
        </div>

    )
}