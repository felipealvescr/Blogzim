// MEUS CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// MEUS CONTEXTOS
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';


// MEUS HOOKS
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication';

// MEUS IMPORTS
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Footer from './Components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';

// context
import { AuthProvider } from './context/AuthContext';
import NavBar from './Components/NavBar';

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()
  console.log(auth)
  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/"/>} />
              <Route path='/post/create' element={<CreatePost />} />
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to={'/login'} />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

