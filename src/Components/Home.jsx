import React from 'react';

const Home = () => {
  return (
    <div >
      <div id="carouselExampleAutoplaying" className="home carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="first carousel-item active opacity-1">
            <div className='text-center'>
            <div className='p-5 m-5'>
              <h1>I'm a designer</h1>
              <p>100% html5 bootstrap templates Made
                By Colorlib.com
              </p>
              <button className="btn btn-transparent border border-dark">View portfolio</button>
              </div>
            </div>
          </div>
          <div className="second carousel-item active w-10" >
          <div className=' m-5'>
            <h1>Hi!<br/>I'm Jackson</h1>
            <p>100% html5 bootstrap templates Made
              By <a href="https://colorlib.com/">Colorlib.com</a></p>
              <button className='btn btn-transparent border border-dark'>Download CV</button>
              </div>
          </div>
        </div>
        <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;