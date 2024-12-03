import React from 'react';


const Experience = () => {
    return (
        <div >
            <div className='text-center m-3 '>
                <p>Experience</p>
                <h2>Work Experience</h2>
            </div>
            <div className='Experiences '>
                <ul>
                    <li>
                        <div className=' shadow-lg timeline p-5'>
                            <div className='timeline-head'>
                                <i class="fa-solid fa-pencil" style={{backgroundColor:'rgb(44, 152, 240)'}}></i>
                                <h1 className='p-3'>Full Stack Developer <span>2015-2019</span></h1>
                            </div>
                            <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise.
                                Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                        </div>
                    </li>
                    <li>
                        <div className='shadow-lg timeline p-5'>
                            <div className='timeline-head'>
                            <i class="fa-solid fa-pencil" style={{backgroundColor:'rgb(217, 84, 79)'}}></i>
                                <h1 className='p-3'>Frontend at google company <span>2019-2021</span></h1>
                            </div>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                    </li>
                    <li>
                        <div className='shadow-lg timeline p-5'>
                            <div className='timeline-head'>
                            <i class="fa-solid fa-pencil" style={{backgroundColor:'rgb(239, 173, 77)'}}></i>
                                <h1 className='p-3'>Data analyst <span>2021-present</span></h1>
                            </div>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;