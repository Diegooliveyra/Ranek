import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/Contato/Contato';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Produto from './pages/Produto/Produto';
import './style/GlobalStyle.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="wraper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="produto/:id" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
