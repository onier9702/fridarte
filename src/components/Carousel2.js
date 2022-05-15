
import React from 'react';

import './Carousel2.css';

export const Carousel2 = () => {

    let counter = 1;
    setInterval(() => {
        document.getElementById('radio' + counter).checked = true;
        counter ++;
        if(counter > 3 ) counter = 1;
    }, 5000);

  return (
    <div className="slider">
        <div className="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <input type="radio" name="radio-btn" id="radio4"/>

            <div className="slide first" >
                <img key="am1" src={process.env.PUBLIC_URL + `/assets/amarillas1.jpg`} alt="ama1"/>
            </div>
            <div className="slide" >
                <img key="am1" src={process.env.PUBLIC_URL + `/assets/amarillas2.jpg`} alt="ama1"/>
            </div>
            <div className="slide" >
                <img key="am1" src={process.env.PUBLIC_URL + `/assets/amarillas3.jpg`} alt="ama1"/>
            </div>

            <div className="auto-navigation" >
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
            </div>

            <div className="manual-navigation">
                <label for="radio1" className="manual-btn"></label>
                <label for="radio2" className="manual-btn"></label>
                <label for="radio3" className="manual-btn"></label>
            </div>
        </div>
    </div>
  )
}
