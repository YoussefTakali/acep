import React from 'react'
import screw from '../images/img5.jpg'
function AboutUs() {
  return (
    <section className="section-about" id='section1'>
    <div className="content-width reveal">
        <header className="about-header">
            <h3><span className="span-about">À Propos</span> De Nous</h3>
        </header>
        <div className="about-content">
            <img src={screw} alt="Screw-image" className='img-aboutus'/>
            <div className="text-block">
                <p className="text-header">Qui Sommmes Nous</p>
                <p>ACEM PLUS a été créée en 2012 par Monsieur BEN SALEM HAMOUDA, gérant de la société et son président .<br />
<br />ACEM PLUS est une filiale de la société mère ACEM et a pour activité principale la production d’équipements destinés aux collectivités locales et adaptés pour l’environnement aux besoins de territoires de la Tunisie .<br />
<br />ACEM PLUS peut affirmer aujourd’hui détenir une part très importante du marché local en tant que parmi leader dans la commercialisation de ses produits aussi une grand part de marche d’exportation vers les pays de Maghreb et d’Afrique .<br />
<br />ACEM PLUS, avec plus de 25 emplois crées et pratiquement 1800m2 d’atelier couvert.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutUs