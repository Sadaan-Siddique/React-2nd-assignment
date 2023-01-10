import React from 'react'
import '../App.css';
function Card_In(props) {
  console.log(props.data);
  return (
    <>
      <h1 className='hd2 fw-bold'>{props.data.title}</h1>
      <div className=" product-div mt-3 text-center ">
        <img src={props.data.img} alt="" />
        <h2 className='mt-2'>{props.data.product}</h2>
        <button className='w-25 '>{props.data.btn}</button>
      </div>
    </>
  )
}

export default Card_In