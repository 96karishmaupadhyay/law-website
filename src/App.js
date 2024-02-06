import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Herosection from './Components/HeroSection/Herosection';
import Intro from './Components/Intro/Intro';
import Success from './Components/SuccessSection/Success';
import Image from './Components/ImageSection/Image';
import Client from './Components/ClientsSection/Client';
import Team from './Components/TeamSection/Team';
import AccordionUsage from './Components/Accordion/Accordion';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Intro/>
      <Success/>
      <Image/>
      <Client/>
      <Team/>
      <AccordionUsage/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
