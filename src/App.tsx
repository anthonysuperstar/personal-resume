import './App.sass';
import Background from './components/Background/Background';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Welcome from './components/Welcome/Welcome';


export default function App() {
  return (
    <div className='container'>
      <header>
        <Navbar />
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

