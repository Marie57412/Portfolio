import React from 'react';
import './scss/App.scss';
import Header from './Components/Header';
import Banniere from './Components/Banniere';
import AvatarSection from './Components/Avatar';
import Project from './Components/Project';
import Competence from './Components/Competence';
import About from './Components/Apropos';

function App() {
  return (
    <div className="App border">
      
        <Header />
        <Banniere />
        <AvatarSection />
        <Project />
        <Competence />
        <About />
      
    </div>
  );
}
export default App;
