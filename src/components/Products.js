import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageModal from './Imagemdl'; // Import your modal component
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import c4 from '../images/c4.png';
import c5 from '../images/c5.png';
import c6 from '../images/c6.png';
import c7 from '../images/c7.jpg';
import c8 from '../images/c8.jpg';
import c9 from '../images/c9.jpg';
import c10 from '../images/c10.jpg';
import c11 from '../images/c11.jpg';
import c12 from '../images/c12.jpg';
import c13 from '../images/c13.jpg';
import c14 from '../images/c14.jpg';
import c15 from '../images/c15.jpg';
import c16 from '../images/c16.jpg';
import c17 from '../images/c17.jpg';
import c18 from '../images/c18.jpg';
import m1 from '../images/m1.png';
import m2 from '../images/m2.png';
import m3 from '../images/m3.png';
import m4 from '../images/m4.png';
import m5 from '../images/m5.png';
import m6 from '../images/m6.png';
import m7 from '../images/m7.png';
import m8 from '../images/m8.jpg';
import m9 from '../images/m9.jpg';
import m10 from '../images/m10.jpg';
import m11 from '../images/m11.jpg';
import m12 from '../images/m12.jpg';
import b1 from '../images/b1.png';
import b2 from '../images/b2.png';
import b4 from '../images/b4.jpg';
import b5 from '../images/b5.jpg';
import o1 from '../images/o1.png';
import o2 from '../images/o2.png';
import o3 from '../images/o3.png';
import o4 from '../images/o4.png';
import o5 from '../images/o5.png';
import o6 from '../images/o6.png';
import o7 from '../images/o7.png';
import o8 from '../images/o8.jpg';
import o9 from '../images/o9.jpg';
import d1 from '../images/d1.png';
import d2 from '../images/d2.png';
import d3 from '../images/d3.png';
import d4 from '../images/d4.png';
import d5 from '../images/d5.png';
import d6 from '../images/d6.png';
import d7 from '../images/d7.png';
import d8 from '../images/d8.png';
import d9 from '../images/d9.png';
import d10 from '../images/d10.png';
import d11 from '../images/d11.jpg';
import d12 from '../images/d12.jpg';
import d13 from '../images/d13.jpg';
import d14 from '../images/d14.jpg';
import d17 from '../images/d17.jpg';
import d18 from '../images/d18.jpg';
import d19 from '../images/d19.jpg';
import d20 from '../images/d20.jpg';
import d21 from '../images/d21.jpg';
import d22 from '../images/d22.jpg';
import d23 from '../images/d23.jpg';
import d24 from '../images/d24.jpg';
import d25 from '../images/d25.jpg';
import d26 from '../images/d26.jpg';
import d27 from '../images/d27.png';
import d28 from '../images/d28.png';
import d29 from '../images/d29.png';
import r1 from '../images/r1.png';
import r2 from '../images/r2.jpg';
import r3 from '../images/r3.jpg';
import r4 from '../images/r4.jpg';
import r5 from '../images/r5.png';
import r6 from '../images/r6.png';
import r7 from '../images/r7.jpg';
import r8 from '../images/r8.jpg';
import r9 from '../images/r9.jpg';
import r10 from '../images/r10.png';
import r11 from '../images/r11.png';
import r12 from '../images/r12.png';
import r13 from '../images/r13.png';
import r14 from '../images/r14.png';
import f1 from '../images/f1.png'
import f2 from '../images/f2.jpg';
import f3 from '../images/f3.png';
import f4 from '../images/f4.png';
import f5 from '../images/f5.png';
function Products() {
  const [modalImage, setModalImage] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c17,
    c18
  ];
  const containerImages = [m1, m2, m3, m4, m5, m6 ,m7, m8, m9, m10, m11 , m12];
  const camion = [r1, r2, r3, r4, r5, r6 ,r7, r8, r9, r10, r11 , r12,r13, r14];
  const Brouette = [b1, b2, b4, b5];
  const ordure = [o1, o2, o3, o4, o5, o6 ,o7, o8, o9];
  const remorque = [d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d17,d18,d19,d20,d21,d22,d23,d24,d25,d26,d27,d28,d29];
  const pousse =[f1,f2,f3,f4,f5]
  const ImageStyle = {
    width: '100%', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
  };
  const specificImageClass = 'specific-image-class'; // Replace with your actual class name
  const containerImageStyle = {
    width: '60%', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
  };
  const smallImageStyle = {
    width: '90%', // Adjust the width as needed for smaller images
    height: 'auto', // Maintain aspect ratio
  };
  const smallImageStyle1 = {
    width: '50%', // Adjust the width as needed for smaller images
    height: 'auto', // Maintain aspect ratio
  };
  return (
    <section className="section-products" id='Products'>
      <div className="content-width">
        <header className="about-header-left">
          <h3>Nos Produits</h3>
        </header>
        <h4>Articles Métalliques</h4>
        <Slider {...settings} className='slider'>
          {containerImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Container Image ${index}`}
                style={containerImageStyle}
                onClick={() => setModalImage(image)} // Open modal on click
              />
            </div>
          ))}
        </Slider>
        <h4>Benne Tasseuse et Remorque</h4>
        <Slider {...settings} className='slider'>
          {remorque.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Container Image ${index}`}
                style={containerImageStyle}
                onClick={() => setModalImage(image)} // Open modal on click
              />
            </div>
          ))}
        </Slider>
        <h4>Brouette de Ramassage d'Ordure</h4>
        <Slider {...settings} className='slider'>
          {Brouette.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Container Image ${index}`}
                style={containerImageStyle}
                onClick={() => setModalImage(image)} // Open modal on click
              />
            </div>
          ))}
        </Slider>
        <h4>Conteneur à Ordure</h4>
        <Slider {...settings} className='slider'>
          {ordure.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Container Image ${index}`}
                style={containerImageStyle}
                onClick={() => setModalImage(image)} // Open modal on click
              />
            </div>
          ))}
        </Slider>
        <h4>Corbeille à papier</h4>
        <Slider {...settings} className='corbeille slider'>
          {images.map((image, index) => (
            <div key={index}>
                <img
              style={index < 6 ? smallImageStyle : ImageStyle} // Apply smallImageStyle for the first 6 images
              src={image}
                  alt={`Image ${index}`}
                  onClick={() => setModalImage(image)} // Open modal on click
                />
            </div>
          ))}
        </Slider>
        <h4>Equipements sur Camion</h4>
        <Slider {...settings} className='slider'>
          {camion.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Container Image ${index}`}
                style={containerImageStyle}
                onClick={() => setModalImage(image)} // Open modal on click
              />
            </div>
          ))}
        </Slider>
        <h4>Pousse Pousse</h4>
        <Slider {...settings} className='pousse slider'>
          {pousse.map((image, index) => (
            <div key={index}>
              <img
                className={index === 1? specificImageClass : ''}
                src={image}
                alt={`Container Image ${index}`}
                style={index === 1 ? smallImageStyle1 : ImageStyle} // Apply smallImageStyle for the first 6 images
                onClick={() => setModalImage(image)} // Open modal on click
              />
            </div>
          ))}
        </Slider>
      </div>
      {modalImage && (
        <ImageModal imageUrl={modalImage} onClose={() => setModalImage(null)} />
      )}
    <section className='add'></section>
    </section>
  );
}

export default Products;
