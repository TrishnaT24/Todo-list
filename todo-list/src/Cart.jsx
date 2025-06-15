import React, { useState } from 'react'

function Cart({items}) {
    
  return (
    <div>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>
                    {item.title}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Cart;