import React from 'react'
import img1 from './../images/slider1.jpg'
import img2 from './../images/slider2.jpg'
import img3 from './../images/slider3.jpg'

function Slider() {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Slider