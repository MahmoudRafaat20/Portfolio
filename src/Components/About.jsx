import React from 'react';

const About = () => {
    return (
        <div className='p-5'>
            <div className='p-5'>
                <h1>Who am i?</h1>
                <p className='p-2'><strong>Hi Im Jackson Ford </strong>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.</p>
                <p className='p-2'>  Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

            </div>
            <div class="container text-center p-5">
                <div class="row">
                    <div class="col">

                        <div class="p-4 shadow-lg border-5 border-bottom border-success">
                            <i class="p-3 fa-regular fa-lightbulb text-success" style={{color:"green"}}></i>
                            <p className=''>Graphic design</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-4 shadow-lg  border-5 border-bottom border-primary">
                            <i class="p-3 fa-solid fa-earth-africa text-primary" style={{color:"blue"}}></i>
                            <p className=''>Web design</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-4 shadow-lg  border-5 border-bottom border-danger">
                            <i class="p-3 fa-solid fa-database text-danger" ></i>
                            <p >Software</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-4 shadow-lg border-5 border-bottom border-warning ">
                            <i class="p-3 fa-solid fa-mobile-screen-button text-warning" ></i>
                            <p >Application</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;