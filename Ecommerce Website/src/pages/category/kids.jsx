import React from 'react'
import Hero from '../../components/Hero'

const kids = (props) => {
  return (
    <div>
      <Hero line="New Collection for Kids" />
      <div className=''>

<div className="h1 text-center py-4 font-bold md:text-4xl text-2xl">{props.title}</div>
<div className=' flex flex-col space-y-4 md:space-y-0 md:space-x-5 md:flex-row justify-between py-[2%] md:px-[4%] px-[5%]'>
  
    
    <div className='item bg-gray-300 text-center p-2  w-[90vw] rounded-md'>
      <img src="/images/P1.jpg"/*{props.image}*/ alt="" />
      <p className=' text-lg font-bold'>{props.name}I AM ITEM</p>
      <div className="item-prices">
        <div className="price-new ">{props.new_price}10.4$</div>
        <div className="price-old">{props.old_price}</div>
      </div>
    </div>
    <div className='item bg-gray-300 text-center p-2  w-[90vw] rounded-md'>
      <img src="/images/P1.jpg"/*{props.image}*/ alt="" />
      <p className=' text-lg font-bold'>{props.name}I AM ITEM</p>
      <div className="item-prices">
        <div className="price-new ">{props.new_price}10.4$</div>
        <div className="price-old">{props.old_price}</div>
      </div>
    </div>
    <div className='item bg-gray-300 text-center p-2  w-[90vw] rounded-md'>
      <img src="/images/P1.jpg"/*{props.image}*/ alt="" />
      <p className=' text-lg font-bold'>{props.name}I AM ITEM</p>
      <div className="item-prices">
        <div className="price-new ">{props.new_price}10.4$</div>
        <div className="price-old">{props.old_price}</div>
      </div>
    </div>
    <div className='item bg-gray-300 text-center p-2  w-[90vw] rounded-md'>
      <img src="/images/P1.jpg"/*{props.image}*/ alt="" />
      <p className=' text-lg font-bold'>{props.name}I AM ITEM</p>
      <div className="item-prices">
        <div className="price-new ">{props.new_price}10.4$</div>
        <div className="price-old">{props.old_price}</div>
      </div>
    </div>
    
  
  
    
</div>



</div>
    </div>
  )
}

export default kids
