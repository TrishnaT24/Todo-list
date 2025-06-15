import React,{useState} from 'react'
import Cards from './Cards'
import Cart from './Cart'
function Shop({handleCart}) {
  return (
    <div>
    <Cards title="shoe" hi={handleCart}></Cards>
    <Cards title="bag" hi={handleCart}></Cards>
    <Cards title="slippers" hi={handleCart} ></Cards>
    <Cards title="nike" hi={handleCart}></Cards>
    <Cards title="food" hi={handleCart} ></Cards>
    </div>
  )
}

export default Shop