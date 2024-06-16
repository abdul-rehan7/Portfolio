import React from 'react'
import Hero from '../components/Hero'
import Item from '../components/Item'
import Footer from '../components/footer'
import Bar from "../components/Bar"

const Shop = () => {
  return (
    <div>
      <Hero line="Check Out our Most Popular Picks!" image="/images/hero.png"/>
      <Item/>
      <Footer/>
      <Bar/>
    </div>
  )
}

export default Shop
