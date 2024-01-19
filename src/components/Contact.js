import React from 'react'

function Contact() {
  return (
    <section className="touch" id='section4'>
    <div className="touch__content-width content-width reveal">
        <div className="touch__about-header-left about-header-left">
            <h3>Contactez-Nous</h3>
        </div>
        <div className="touch__form-block">
            <div className="touch__form form">
                <form action="#" method="post">
                    <input type="text" name="Name" placeholder="Nom & Prenom" id="text" />
                    <input type="email" name="Email" placeholder="email" id="email" />
                    <textarea name="Message" placeholder="Message" id="message" />
                    <input type="submit" value="Envoyer" id="submit" />
                </form>
            </div>
            <div className='map'><iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.7558634417737!2d10.184050775022282!3d36.800403467689485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd346c035f673f%3A0xc4925941c8b8541!2s5140%20Av.%20Habib%20Bourguiba%2C%20Tunis!5e0!3m2!1sfr!2stn!4v1691052384860!5m2!1sfr!2stn" /></div>
        </div>
    </div>
    </section>
  )
}

export default Contact