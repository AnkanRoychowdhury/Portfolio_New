// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Catagory from './components/Catagory';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import EducationCertification from './components/EducationCertification';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogPost from './components/ui/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <TechStack />
              <Catagory />
              <Timeline />
              <Projects />
              <EducationCertification />
              <Blog />
              <Contact />
            </>
          } />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;