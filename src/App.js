import React from "react";
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Contact from './Components/Footer';

function App() {
  return (
    <div className="page">
      <React.Fragment>
          <Header />
          <Home />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
      </React.Fragment>
    </div>
  );
}

export default App;
