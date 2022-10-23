import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Project from './components/Project/Project';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Service/>
      <Project/>
      <News/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
