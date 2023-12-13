import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Parallax from './components/Parallax';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import './styles/app.scss';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <section id='Homepage'><Navbar /> <Hero /></section>      
      <section id='Services'><Parallax type='services' /></section>
      <section><Services /></section>
      <section id='Portfolio'><Parallax type='portfolio' /></section>
      <Portfolio />
      <section id='Contact'><Contact /></section>
    </div>
  );
}

export default App;
