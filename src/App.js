import React from 'react';
import Header from './Components/Header/Header';
import ProfilePhoto from './Components/ProfilePhoto/ProfilePhoto';
import Icons from './Components/Icons/Icons';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div>
        <Header />
        <ProfilePhoto />
        <Icons />
        <About />
        <Skills />
        <Projects />
    </div>
  );
}

export default App;
