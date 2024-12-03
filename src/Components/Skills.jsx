import React from 'react';

const Skills = () => {
    return (
        <>
            <div className='skills text-center p-5'>
                <p>My Speciality</p>
                <h1>My Skills</h1>
                <p className='p-5'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen.
                    She packed her seven versalia, put her initial into the belt and made herself on the way.</p>

                <div class="row progresses">
                    <div class="col text-start">
                          <h5>HTML5</h5>
                        <div class="progress m-3" role="progressbar" aria-label="Warning example" aria-valuenow="25" aria-valuemin="" aria-valuemax="25">
                            <div class="progress-bar bg-success" style={{ width: "70%" }}> 70% </div>
                        </div>
                        <h5>CSS3</h5>
                        <div class="progress m-3" role="progressbar" aria-label="Warning example" aria-valuenow="25" aria-valuemin="" aria-valuemax="25">
                            <div class="progress-bar bg-warning" style={{ width: "85%" }}> 85% </div>
                        </div>
                        <h5>JQuery</h5>
                        <div class="progress m-3" role="progressbar" aria-label="Warning example" aria-valuenow="25" aria-valuemin="" aria-valuemax="25">
                            <div class="progress-bar bg-danger" style={{ width: "75%" }}> 75% </div>
                        </div>
                    </div>
                    <div class="col text-start">
                    <h5>Photoshop</h5>
                    <div class="progress m-3" role="progressbar" aria-label="Warning example" aria-valuenow="25" aria-valuemin="" aria-valuemax="25">
                            <div class="progress-bar bg-success" style={{ width: "60%" }}> 60% </div>
                        </div>
                        <h5>Wordpress</h5>
                        <div class="progress m-3" role="progressbar" aria-label="Warning example" aria-valuenow="25" aria-valuemin="" aria-valuemax="25">
                            <div class="progress-bar bg-info" style={{ width: "90%" }}> 90% </div>
                        </div>
                        <h5>SEO</h5>
                        <div class="progress m-3" role="progressbar" aria-label="Warning example" aria-valuenow="25" aria-valuemin="" aria-valuemax="25">
                            <div class="progress-bar bg-primary" style={{ width: "80%" }}> 80% </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Skills;



