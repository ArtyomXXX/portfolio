import React from "react";
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact.jsx';

function App() { 
  return (
    <React.Fragment>
        <Header />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
    </React.Fragment>
  );
}

export default App;
