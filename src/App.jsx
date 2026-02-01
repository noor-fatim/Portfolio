import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillSection from './components/SkillSection';
import ExperienceSection from './components/ExperienceSection';
import AboutMe from './components/AboutMe';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <SkillSection/>
      <ExperienceSection/>
      <AboutMe/>
      <ProjectsSection/>
      <Contact/>
      <FooterSection/>
    </div>
  )
}

export default App