import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu/Menu';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Usuarios } from './components/Usuarios/Usuarios';
import { Container } from "react-bootstrap"
import { Login } from './components/Login/Login';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/usuarios' element={<Usuarios />} />
            <Route path='/login' element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
