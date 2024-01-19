import React from 'react'
import facebook from '../images/icons8-facebook-100.png'

function Footer() {
    return(
        <footer className="template-width" id="footer">
			<div className="content-width">
				<div className="info-wrapper">
					<div className="info">
						<div className="info__logo">
							<div className="info__text"><p>ACEM PLUS a été créée en 2012 par Monsieur BEN SALEM HAMOUDA, gérant de la société et son président.</p></div>
						</div>
					</div>
					<div className="contacts">
						<p className="contacts__block-header block-header">Contact</p>
						<p className="contacts__text">Addresse : Avenue Habib Bourguiba 5140 Souassi Mahdia Tunisie<br />
Tel :  ( + 216 ) 73 659 113 <br />
Fax : ( + 216 ) 73 658 120<br />
Email : acemplus@gmail.com</p>
					</div>
					<div className='follow'>
						<div className='fb'>
						<p className='block-header'>Suivez-Nous</p>
						<a href="https://www.facebook.com/acemplus.tn" className="facebook-link">
    					<img src={facebook} alt="Facebook Icon" className="facebook-icon" />
   					 <p className="facebook-text">Acemplus.tn</p></a>
						</div>
					</div>
				</div>
			</div>
		</footer>
    )
}

export default Footer