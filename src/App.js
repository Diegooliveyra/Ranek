import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './Produtos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
