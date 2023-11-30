import React from 'react';
import './scss/App.scss';
import Header from './Components/Header';
import Banniere from './Components/Banniere';
import AvatarSection from './Components/Avatar';
import Project from './Components/Project';
import About from './Components/Apropos';

function App() {
  return (
    <div className="App border">
      
        <Header />
        <Banniere />
        <AvatarSection />
        <Project />
        <About />
      
    </div>
  );
}
export default App;
