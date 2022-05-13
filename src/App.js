import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Service from './Pages/Service/Service';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>
    <Route path="/service" element={<Service></Service>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
  </Routes>
  </Navbar>
    </div>
  );
}

export default App;
