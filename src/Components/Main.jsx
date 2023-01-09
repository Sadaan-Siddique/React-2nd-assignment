import React from 'react'
import '../App.css';
import MainIndicators from './MainIndicators'
import MainImages from './MainImages'
import MainPreviousBtn from './MainPreviousBtn'
import MainNextBtn from './MainNextBtn'
function Main() {
  return (
    <>
      <div className="">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <MainIndicators/>
          <div className="carousel-inner">
            <MainImages/>
          </div>
          <MainPreviousBtn/>
          <MainNextBtn/>
        </div>
      </div>
    </>

  )
}

export default Main