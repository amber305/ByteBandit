import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';

export const App = () => {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <Hero />
        <TechStack />
        <Services />
        <Footer />
      </div>
    </>
  )
}

export default App;  