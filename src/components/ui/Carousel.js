// Carousel.js
import React, { useEffect } from 'react';
import './Carousel.css'; // Ensure this path is correct based on your file structure
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import img7 from '../img/img7.jpg';
import img8 from '../img/img8.jpg';
import img9 from '../img/img9.jpg';
import img10 from '../img/img10.jpg';
import img11 from '../img/img11.jpg';

const Carousel = () => {
  useEffect(() => {
    // JavaScript code to handle the carousel functionality
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');

    const carouselDom = document.querySelector('.carousel');
    const SliderDom = carouselDom.querySelector('.carousel .list');
    const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    const timeDom = document.querySelector('.carousel .time');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const showSlider = (type) => {
      const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
      const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    nextDom.onclick = () => {
      showSlider('next');
    };

    prevDom.onclick = () => {
      showSlider('prev');
    };

    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  return (
    <div className="carousel w-[100vw]">
      <div className="list">
        <div className="item">
          <img src={img1} alt="img1" />
          <div className="content">
          <div className="title">Some of our Projects</div>
            <div className="topic">checkout now</div>
            <div className="buttons">
              <button>  <a href="team">Our Team</a>   </button>
              <button> <a href="contact">Contact us</a> </button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img2} alt="img2" />
          <div className="content">
          <div className="title">Some of our Projects</div>
            <div className="topic">checkout now</div>
            <div className="buttons">
              <button>  <a href="team">Our Team</a>   </button>
              <button> <a href="contact">Contact us</a> </button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img3} alt="img3" />
          <div className="content">
          <div className="title">Some of our Projects</div>
            <div className="topic">checkout now</div>
            <div className="buttons">
              <button>  <a href="team">Our Team</a>   </button>
              <button> <a href="contact">Contact us</a> </button>
            </div>
          </div>
        </div>


        <div className="item">
          <img src={img4} alt="img4" />
          <div className="content">
          <div className="title">Some of our Projects</div>
            <div className="topic">checkout now</div>
            <div className="buttons">
              <button>  <a href="team">Our Team</a>   </button>
              <button> <a href="contact">Contact us</a> </button>
            </div>
          </div>
        </div>
 
        <div className="item">
          <img src={img5} alt="img5" />
          <div className="content">
          <div className="title">Some of our Projects</div>
            <div className="topic">checkout now</div>
            <div className="buttons">
              <button>  <a href="team">Our Team</a>   </button>
              <button> <a href="contact">Contact us</a> </button>
            </div>
          </div>
        </div>
 
        <div className="item">
          <img src={img6} alt="img6" />
          <div className="content">
          <div className="title">Some of our Projects</div>
            <div className="topic">checkout now</div>
            <div className="buttons">
              <button>  <a href="team">Our Team</a>   </button>
              <button> <a href="contact">Contact us</a> </button>
            </div>
          </div>
        </div>
 
        <div className="item">
          <img src={img7} alt="img7" />
          <div className="content">
          <div className="title">Some of our Projects</div>
            <div className="topic">checkout now</div>
            <div className="buttons">
              <button>  <a href="team">Our Team</a>   </button>
              <button> <a href="contact">Contact us</a> </button>
            </div>
          </div>
        </div>
 
        <div className="item">
          <img src={img8} alt="img8" />
          <div className="content">
          <div className="title">Some of our Projects</div>
            <div className="topic">checkout now</div>
            <div className="buttons">
              <button>  <a href="team">Our Team</a>   </button>
              <button> <a href="contact">Contact us</a> </button>
            </div>
          </div>
        </div>
 
        <div className="item">
          <img src={img9} alt="img9" />
          <div className="content">
          <div className="title">Some of our Projects</div>
            <div className="topic">checkout now</div>
            <div className="buttons">
              <button>  <a href="team">Our Team</a>   </button>
              <button> <a href="contact">Contact us</a> </button>
            </div>
          </div>
        </div>
 
        <div className="item">
          <img src={img10} alt="img10" />
          <div className="content">
          <div className="title">Some of our Projects</div>
            <div className="topic">checkout now</div>
            <div className="buttons">
              <button>  <a href="team">Our Team</a>   </button>
              <button> <a href="contact">Contact us</a> </button>
            </div>
          </div>
        </div>
 
        <div className="item">
          <img src={img11} alt="img11" />
          <div className="content">
          <div className="title">Some of our Projects</div>
            <div className="topic">checkout now</div>
            <div className="buttons">
              <button>  <a href="team">Our Team</a>   </button>
              <button> <a href="contact">Contact us</a> </button>
            </div>
          </div>
        </div>
 

      </div>
      <div className="thumbnail">

        <div className="item">
          <img src={img1} alt="img1" />
          <div className="content">
          </div>
        </div>

        <div className="item">
          <img src={img2} alt="img2" />
          <div className="content">
          </div>
        </div>

        <div className="item">
          <img src={img3} alt="img3" />
          <div className="content">
          </div>
        </div>

        <div className="item">
          <img src={img4} alt="img4" />
          <div className="content">
          </div>
        </div>
        
        <div className="item">
          <img src={img5} alt="img5" />
          <div className="content">
          </div>
        </div>
        <div className="item">
          <img src={img6} alt="img6" />
          <div className="content">
          </div>
        </div>
        <div className="item">
          <img src={img7} alt="img7" />
          <div className="content">
          </div>
        </div>
        <div className="item">
          <img src={img8} alt="img8" />
          <div className="content">
          </div>
        </div>
        <div className="item">
          <img src={img9} alt="img9" />
          <div className="content">
          </div>
        </div>
        <div className="item">
          <img src={img10} alt="img10" />
          <div className="content">
          </div>
        </div>
        <div className="item">
          <img src={img11} alt="img11" />
          <div className="content">
          </div>
        </div>

      </div>
      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default Carousel;
