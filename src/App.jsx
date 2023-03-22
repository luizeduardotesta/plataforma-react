import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Login } from './pages/Login/Login';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { NotFound } from './pages/NotFound/NotFound';
import { Root } from './pages/Root/Root';
import { Produtos } from './pages/Produtos/Produtos';
import { Info } from './pages/Info/Info';
import { Vendas } from './pages/Vendas/Vendas';
import { Perfil } from './components/Perfil/Perfil';
import { Id } from './components/Id/Id';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />}>
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/Info" element={<Info />} />
              <Route path="/vendas" element={<Vendas />} />
            </Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/usuarios" element={<Usuarios />}>
              <Route path="/usuarios/3245" element={<Id />}>
                <Route path="/usuarios/3245/perfil" element={<Perfil />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
