import React from "react";
// import Header from './Components/Header';
// import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Contact from './Components/Footer';

function App() {
  return (
    <div className="page">
      <div class='light x1'></div>
      <div class='light x2'></div>
      <div class='light x3'></div>
      <div class='light x4'></div>
      <div class='light x5'></div>
      <div class='light x6'></div>
      <div class='light x7'></div>
      <div class='light x8'></div>
      <div class='light x9'></div>
      <React.Fragment>
          {/* <Headers /> */}
          {/* <Home /> */}
          <About />
          <Skills />
          <Portfolio />
          <Contact />
      </React.Fragment>
    </div>
  );
}

export default App;
