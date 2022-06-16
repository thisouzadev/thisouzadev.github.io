import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Abstract from './pages/Abstract';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Graduate from './pages/Graduate';
import Information from './pages/Information';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Provider from './context/Provider';

function App() {
  return (
    <>
      <Provider>
        <Navbar />
        <Home />
        <div className="oneforall">
          <Information />
          <Skills />
          <Experience />
          <Graduate />
          <Contact />
          <Abstract />
          <Project />
        </div>
      </Provider>
    </>
  );
}

export default App;
