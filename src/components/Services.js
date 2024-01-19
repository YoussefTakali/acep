import React from 'react'
import drl1 from '../images/drills-service1.png'
import drl2 from '../images/rings-service2.png'
import drl3 from '../images/screws-service3.png'


function Services() {
  return (
    <section className="section-services" id='section2'>
				<div className="content-width reveal">
					<h3>Nos Services</h3>
					<ul className="service-list">
						<li>
							<img src={drl1} alt="Service-1" className="service-photo" />
							<p className="service-name">Activité ACEM PLUS :</p>
							<p className="service-text">Construction métallique.<br></br>Travail de tôlerie fine.<br></br>Chaudronnerie.<br></br>Mécano soudure.</p>
						</li>
						<li>
							<img src={drl2} alt="Service-2" className="service-photo" />
							<p className="service-name">Fabrication et Equipements<br></br> ACEM PLUS :</p>
							<p className="service-text">Equipements pour collecte des ordures.<br></br>Matériels de propreté.<br></br>Conteneur métallique pour ordures.<br></br>Bennes tasseuses tractées.<br />Bennes tasseuses sur camion.<br />Nacelle élévatrices tractée.<br />Nacelle élévatrices sur camion.<br />Arrosseuse sur camion.</p>
						</li>
						<li>
							<img src={drl3} alt="Service-3" className="service-photo" />
							<p className="service-name">HIDRO-MAK :</p>
							<p className="service-text">ACEM PLUS est le représentant, importateur et partenaire officiel de produit HIDRO-MAK en Tunisie.</p>
						</li>
					</ul>
				</div>
			</section>
  )
}

export default Services