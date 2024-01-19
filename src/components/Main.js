import React  from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'
import logo7 from '../images/logo7.png'
import item1 from '../images/item1.png'
import item2 from '../images/item2.png'
import item3 from '../images/item3.png'
import item4 from '../images/item4.png'
import item5 from '../images/item5.png'
import item6 from '../images/item6.png'
import item7 from '../images/item7.png'
import item8 from '../images/item8.png'
import item9 from '../images/item9.png'
import item10 from '../images/item10.png'
import item11 from '../images/item11.png'
import item12 from '../images/item12.png'
import item13 from '../images/item13.png'
import item14 from '../images/item14.png'
import item15 from '../images/item15.png'
import item16 from '../images/item16.png'
const Main = () => {
    return (
      <div className='main' id='section0'>
        <div className="carousel-container">
            <OwlCarousel
                className="owl-theme"
                loop
                nav
                items={1}
                autoplay
                autoplayTimeout={5000} 
                // autoplayHoverPause // Pause autoplay on hover
                navText={['<', '>']}
                responsive={{
                    0: {
                        items: 1
                    }
                }}
            >
                <div className="carousel-item i1">
                  <img className='logo1' src={logo1} />
                  <img className='logo2' src={logo2} />
                  <img className='logo3' src={logo3} />
                  <img className='logo4' src={logo4} />
                  <img className='logo5' src={logo5} />
                  <img className='logo7' src={logo7} />
                  <img className='logo6' src={logo6} />
                </div>
                <div className="carousel-item i2">
                  <img className='item1' src={item1} />
                  <img className='item2' src={item2} />
                  <div className='text'><p>Article Métalliques</p></div>
                </div>
                <div className="carousel-item i3">
                    <div className='text'><p>Benne Tasseuse & Remorque</p></div>
                   <img className='item3' src={item3} />
                   <img className='item4' src={item4} />
                </div>
                <div className="carousel-item i4">
                <img className='item5' src={item5} />
                <img className='item6' src={item6} />
                <div className='text'><p>Brouette de Ramassage d'Ordure</p></div>
                </div>
                <div className="carousel-item i5">
                <img className='item7' src={item7} />
                <img className='item8' src={item8} />
                <img className='item9' src={item9} />
                <div className='text'><p>Conteneur à Ordure</p></div>
                </div>
                <div className="carousel-item i6">
                <div className='text'><p>Corbeille à Papier</p></div>
                <img className='item10' src={item10} />
                <img className='item11' src={item11} />
                <img className='item12' src={item12} />
                </div>
                <div className="carousel-item i7">
                <img className='item13' src={item13} />
                <img className='item14' src={item14} />
                <div className='text'><p>Equipements sur Camion</p></div>
                </div>
                <div className="carousel-item i8">
                <img className='item15' src={item15} />
                <img className='item16' src={item16} />
                <div className='text'><p>Pousse Pousse</p></div>
                </div>
            </OwlCarousel>
          </div>
        </div>
      
    );
};

export default Main;
