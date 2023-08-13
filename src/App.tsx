import './App.sass';
import Background from './components/Background/Background';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import NavbarMobile from './components/NavbarMobile/NavbarMobile';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Welcome from './components/Welcome/Welcome';


export default function App() {
  return (
    <div className='container'>
      <header>
        <div className="desk-nav">
          <Navbar />
        </div>
        <div className="mobile-nav">
          <NavbarMobile />
        </div>
      </header>
      <main>
        <Welcome />
        <Intro />
        <Skills />
        <Background />
        <Portfolio />
      </main>
    </div>
  );
}

