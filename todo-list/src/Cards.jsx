import React from 'react'
function Cards({title,handleCart}) {
    const handleChange=()=>{
        handleCart(title);
    }
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button 
      onClick={handleChange}
      className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
  );
}

export default Cards