import React from 'react';
import Header from './Components/Header/Header';
import ProfilePhoto from './Components/ProfilePhoto/ProfilePhoto';
import Icons from './Components/Icons/Icons';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import './App.css';

function App() {
  return (
    <div>
        <Header />
        <ProfilePhoto />
        <Icons />
        <About />
        <Projects />
    </div>
  );
}

export default App;
