
import './App.css';
import Cover from './components/cover/Cover.jsx'
import Slogan from './components/slogan/Slogan.jsx'
import About from './components/about/About.jsx'
import Nutricion from './components/nutricion/Nutricion.jsx'
import Tarifas from './components/tarifas/Tarifas.jsx'

function App() {
  return (
    <div className="App">
      <Cover></Cover>
      <Slogan></Slogan>
      <About></About>
      <Nutricion></Nutricion>
      <Tarifas></Tarifas>
    </div>
  );
}

export default App;
