import { useState } from 'react';
import './App.css';
import Details from "./assets/Components/details";
import Techstack from "./assets/Components/techstack";
import Header from './assets/Components/Header';
import Projects from './assets/Components/Projects';
import Footer from './assets/Components/footer';

function App() {
  return (
    <div className="app-container">
      <Header className="header" />
      <Details className="details" />
      <Techstack className="techstack"/>
      <Projects className="project"/>

      <Footer className='footerbox'/>

    </div>
  );
}

export default App;
