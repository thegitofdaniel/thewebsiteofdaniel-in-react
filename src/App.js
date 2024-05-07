import React from 'react';
import './App.css';

import Navigation from './components/sections/Navigation';
import Landing from './components/sections/Landing';
import About from './components/sections/About';
// import About from './components/sections/Testimonials';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
    return (
        <>
            <Navigation />
            <Landing />
            <About />
            {/* <Testimonials /> */}
            <Skills />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
