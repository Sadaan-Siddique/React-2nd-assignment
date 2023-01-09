import React from 'react'
import '../App.css';
import IMG1 from './images/Slide-one.jpg'
import IMG2 from './images/Slide-two.jpg'
import IMG3 from './images/Slide-three.jpg'
function MainImages() {
    return (
        <>
            <div className="img-div">
                <div className="carousel-item active ">
                    <img src={IMG1} className="img d-block w-100" alt="Img 1" />
                    <div class="div carousel-caption d-md-block ">
                        <h5>First slide </h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={IMG2} className="img d-block w-100" alt="Img 2" />
                    <div class="div carousel-caption d-md-block ">
                        <h5>Second slide</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={IMG3} style={{opacity:'1'}} className="img d-block w-100" alt="Img 3" />
                    <div class="fw-bold div carousel-caption d-md-block ">
                        <h5>Third slide </h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainImages