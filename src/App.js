import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Herosection from './Components/HeroSection/Herosection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
    </div>
  );
}

export default App;