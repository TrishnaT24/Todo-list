import React,{useState} from 'react'
import Cards from './Cards'
import Cart from './Cart'
function Shop({handleChange}) {
  return (
    <div>
    <Cards title="shoe" hi={handleChange}></Cards>
    <Cards title="bag" hi={handleChange}></Cards>
    <Cards title="slippers" hi={handleChange} ></Cards>
    <Cards title="nike" hi={handleChange}></Cards>
    <Cards title="food" hi={handleChange} ></Cards>
    </div>
  )
}

export default Shop