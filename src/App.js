import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Herosection from './Components/HeroSection/Herosection';
import Intro from './Components/Intro/Intro';
import Success from './Components/SuccessSection/Success';
import Image from './Components/ImageSection/Image';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Intro/>
      <Success/>
      <Image/>
    </div>
  );
}

export default App;
