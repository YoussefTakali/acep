import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ref1 from '../images/ref1.jpg'
import ref2 from '../images/ref2.jpg'
import ref3 from '../images/ref3.jpg'
import ref4 from '../images/ref4.jpg'
import ref5 from '../images/ref5.jpg'
import ref6 from '../images/ref6.jpg'
import ref7 from '../images/ref7.jpg'
import ref8 from '../images/ref8.jpg'
import ref9 from '../images/ref9.jpg'
import ref10 from '../images/ref10.jpg'
import ref11 from '../images/ref11.jpg'
import ref12 from '../images/ref12.jpg'
import ref13 from '../images/ref13.jpg'
const References = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    const images = [
        ref1,
        ref2,
        ref3,
        ref4,
        ref5,
        ref6,
        ref7,
        ref8,
        ref9,
        ref10,
        ref11,
        ref12,
        ref13,
    ];
  
  return (
    <section id='section3'>
        <div className="section-references reveal">
            <h3>NOS RÉFÉRENCES</h3>
            <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </Slider>
        </div>
    </section>
  )
}

export default References