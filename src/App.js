import './App.css';
import Nav from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact'; // adjust the path accordingly
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ThankYou from './Components/ThankYou';
import Project from "./Components/Projects";




import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
            <Route path="/Resume" element={<Resume/>}/>
            <Route path="/contact" element={<Contact />} />
             <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/Project" element={<Project/>}/>
             
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
