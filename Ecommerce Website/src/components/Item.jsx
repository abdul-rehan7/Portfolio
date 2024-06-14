import React from 'react'

const Item = (props) => {
  return (
<div className='bg-red-500 flex flex-col space-y-4 md:space-y-0 md:space-x-5 md:flex-row justify-between py-[2%] md:px-[4%] px-[5%]'>
  
    <div className='item bg-green-500 text-center  w-[90vw]'>
      <img src="/images/P1.jpg"/*{props.image}*/ alt="" />
      <p>{props.name}</p>
      I AM ITEM
      <div className="item-prices">
        <div className="price-new">{props.new_price}Item Price</div>
        <div className="price-old">{props.old_price}</div>
      </div>
    </div>
    
  
    <div className='item bg-green-500 text-center  w-[90vw]'>
      <img src="/images/P1.jpg"/*{props.image}*/ alt="" />
      <p>{props.name}</p>
      I AM ITEM
      <div className="item-prices">
        <div className="price-new">{props.new_price}Item Price</div>
        <div className="price-old">{props.old_price}</div>
      </div>
    </div>
    
  
    <div className='item bg-green-500 text-center  w-[90vw]'>
      <img src="/images/P1.jpg"/*{props.image}*/ alt="" />
      <p>{props.name}</p>
      I AM ITEM
      <div className="item-prices">
        <div className="price-new">{props.new_price}Item Price</div>
        <div className="price-old">{props.old_price}</div>
      </div>
    </div>
    
  
    <div className='item bg-green-500 text-center  w-[90vw]'>
      <img src="/images/P1.jpg"/*{props.image}*/ alt="" />
      <p>{props.name}</p>
      I AM ITEM
      <div className="item-prices">
        <div className="price-new">{props.new_price}Item Price</div>
        <div className="price-old">{props.old_price}</div>
      </div>
    </div>
    
</div>

  )
}

export default Item
