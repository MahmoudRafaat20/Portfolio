import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import about from "../project-assets/about-BgAkqdr2.jpg"
const Navbar = () => {
    return (
    
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="container-fluid text-center">
          
          
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav d-flex flex-column p-4">
            <li>
            <img className='rounded' width={150} height={180} src={about} alt='about-photo' />
            <h1 className='text-center'>Jackson Ford</h1>
                 <p>Frontend Developer<br />in Egypt</p>
            </li>
              <li class="nav-item">
              <Link className="p-5 " aria-current="page" >Home</Link>
              </li>
              <li class="nav-item">
              <Link className="p-2" to="/about">About</Link>
              </li>
              <li class="nav-item">
              <Link className="p-2" to="/work">Work</Link>
              </li>
              <li class="nav-item">
              <Link className="p-2" to="/skills">Skills</Link>
              </li>
              <li class="nav-item">
              <Link className="p-2" to="/experience">Experiences</Link>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;