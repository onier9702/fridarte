
import React, { useState } from 'react';
import './Carousel.css';

export const Carousel = () => {


//    const buttons = document.querySelectorAll('[data-button]');
//    buttons.forEach( button => {
//        button.addEventListener('click', () => {
           
//            const offset = (button.className === 'carousel-button prev') ? 1 : -1;
//            console.log(offset);

//        })
//    } )
    
   const [next, setNext] = useState(1);

   const prevButton = () => {
       (next === 1) ? setNext(next + 2) : setNext(next - 1);
   }

   const nextButton = () => {
       (next === 3) ? setNext(next - 2) : setNext(next + 1);       
   }
   
//    setInterval(() => {
//        if (next < 3) {
//            setNext(next + 1);
//        } else {setNext(next - 2)}
       
//     }, 5000);


  return (
    <section aria-label="Newest Photos">
        <div className="carousel" data-carousel>
            <button className="carousel-button prev" onClick={prevButton} ><i class="bi bi-arrow-left-short"></i></button>
            <button className="carousel-button next" onClick={nextButton} ><i class="bi bi-arrow-right-short"></i></button>
            <img key="am1" src={process.env.PUBLIC_URL + `/assets/amarillas${next}.jpg`} alt="ama1"/>


        </div>
    </section>
  )
}
