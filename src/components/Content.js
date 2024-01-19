import React from 'react'
import AboutUs from './AboutUs'
import Main from './Main'
import Contact from './Contact'
import References from './References'
import Services from './Services'

function Content() {
  return (
    <div>
      <Main />
      <span id='AboutUs'></span>
      <AboutUs />
      <span id='Services'></span>
      <Services />
      <span id='References'></span>
      <References />
      <span id='ContactUs'></span>
      <Contact />
    </div>
  )
}

export default Content