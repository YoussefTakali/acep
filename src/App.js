import {Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header.js'
import Footer from './components/Footer.js';
import './style/App.css';
import Products from './components/Products.js';
import Content from './components/Content.js';




window.addEventListener('scroll', reveal)
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  
  for(var i=0; i<reveals.length; i++) {
    var windowheight=window.innerHeight;
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealpoint=150;
    if (revealtop< windowheight-revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
}
}
document.addEventListener("DOMContentLoaded", function() {
  const navMenu = document.querySelector(".nav-menu");
  const contentHeader = document.querySelector(".content-header");

  if (navMenu && contentHeader) {
    navMenu.addEventListener("click", function(event) {
      event.preventDefault();
      contentHeader.classList.toggle("activee");
    });
  } else {
    console.error("navMenu or contentHeader not found in the DOM");
  }
});

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header />
      <main className="template-width">
      <Routes>
      <Route path="/" element={<Content/>} />
      <Route path="/products" element={<Products/>} />
      </Routes>
      </main>
      <Footer />
    </div>
    </HashRouter>
  );
}
export default App;
