import './App.css';
import Nav from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Home/>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
