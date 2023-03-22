// MEUS CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// MEUS IMPORTS
import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div>
        <BrowserRouter>
        <NavBar />
          <div className='container'>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/register" element={ <Register /> } />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
