import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/Contato';
import Header from './Components/Header/Header';
import Produtos from './pages/Produtos';
import './style/GlobalStyle.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
