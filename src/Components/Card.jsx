import React from 'react'
import Card_In from './Card_In'
import '../App.css';
import Product1 from './images/product_1.jpg'
import Product2 from './images/product_2.jpg'
import Product3 from './images/product3.jpg'
import Product4 from './images/product_4.jpg'
import Product5 from './images/product5.jpg'
import Product6 from './images/product6.jpg'
import Product7 from './images/product7.jpg'
import Product8 from './images/product8.jpg'
import Product9 from './images/product9.jpg'
import Product10 from './images/product_10.jpg'

function Card() {
  // JS
  let arrCard = [
    {
      title:'Bat Bottle',
      img:Product1,
      product:'Product 1',
      btn:'Buy'
    },
    {
      title:'Football',
      img:Product2,
      product:'Product 2',
      btn:'Buy'
    },
    {
      title:'Laptop',
      img:Product3,
      product:'Product 3',
      btn:'Buy'
    },
    {
      title:'Wall Clock',
      img:Product4,
      product:'Product 4',
      btn:'Buy'
    },
    {
      title:'Perfume',
      img:Product5,
      product:'Product 5',
      btn:'Buy'
    },
    {
      title:'Head Phone',
      img:Product6,
      product:'Product 6',
      btn:'Buy'
    },
    {
      title:'Watch',
      img:Product7,
      product:'Product 7',
      btn:'Buy'
    },
    {
      title:'Bag',
      img:Product8,
      product:'Product 8',
      btn:'Buy'
    },
    {
      title:'Lens',
      img:Product9,
      product:'Product 9',
      btn:'Buy'
    },
    {
      title:'Camera',
      img:Product10,
      product:'Product 10',
      btn:'Buy'
    }
  ]
  let newArr = arrCard.map((item)=>{
    return <Card_In key={item} data = {item}/>
  })
  return (
    <>
    <h1 className='hd1 text-center fw-bold'>Here Are Some Products</h1>
    {newArr}
    </>
  )
}

export default Card