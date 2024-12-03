import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import Img1 from "../project-assets/img-1-C4nS0eD8.jpg"
import Img2 from "../project-assets/img-2-D-4H1m4L.jpg"
import Img3 from "../project-assets/img-3-pR2ZEVY9.jpg"
import Img4 from "../project-assets/img-4-tHccITd-.jpg"
import Img5 from "../project-assets/img-5-lAucr__a.jpg"
import Img6 from "../project-assets/img-6-DFW03AZ3.jpg"
import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <div className='works text-center p-5 '>
            <p >My works</p>
            <h2>Recent work</h2>
            <ul class="nav d-flex justify-content-center ">
                <li class="nav-item">
                    <button className="btn btn-light nav-link active">Graphic</button>
                </li>
                <li class="nav-item">
                    <button className="btn btn-light nav-link active">Software</button>
                </li>
                <li class="nav-item">
                    <button className="btn btn-light nav-link active">App</button>
                </li>
            </ul>
            <div class="worklist text-center p-5" id='Images'>
                <div class="row gy-5">
                    <div class="col-md-6">
                     <img src={Img1} />
                    </div>
                    <div class="col-md-6">
                    <img src={Img2} />
                    </div>
                    <div class="col-md-6">
                    <img src={Img3} />
                    </div>
                    <div class="col-md-6">
                    <img src={Img4} />
                    </div>
                    <div class="col-md-6">
                    <img src={Img5} />
                    </div>
                    <div class="col-md-6">
                    <img src={Img6} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;