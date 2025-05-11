import './App.css';
import Nav from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
