import './scss/App.scss';
import Header from './Components/Header';
import Banniere from './Components/Banniere';
import Project from './Components/Project';

function App() {
  return (
    <div className="App border">
      
      <Header />
      <Banniere />
      <Project />
    </div>
  );
}

export default App;
