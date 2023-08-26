import React from "react";

export default function Imagesldr() {
  return (<>
    <div class="container">

      {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://darshan.ac.in/U01/Slider/Slide_4.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item active">
                <img src="https://darshan.ac.in/U01/Slider/Slide_9.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item active">
                <img src="https://darshan.ac.in/U01/Slider/Slide_5.jpg" class="d-block w-100" alt="..."/>
                </div>
            </div>
            </div> */}

      <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img className="img-fluid" src="https://darshan.ac.in/U01/Slider/Slide_4.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img className="img-fluid" src="https://darshan.ac.in/U01/Slider/Slide_9.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img className="img-fluid" src="https://darshan.ac.in/U01/Slider/Slide_5.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev bg-transparent" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next bg-transparent" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </>);
}