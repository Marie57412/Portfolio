import React from 'react';
import './scss/App.scss';
import Header from './Components/Header';
import Banniere from './Components/Banniere';
import AvatarSection from './Components/Avatar';
import Project from './Components/Project';
import Competence from './Components/Competence';
import About from './Components/Apropos';
import Footer from './Components/Footer';
import Form from './Components/Form';

function App() {
  return (
    <div className="App border">
      
        <Header />
        <Banniere />
        <AvatarSection />
        <Project />
        <Competence />
        <About />
        <Form />
        <Footer />

    </div>
  );
}
export default App;
