import './App.css';
import './fonts/fonts.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Product from './components/Item';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/product/:id" element={<Product />} />   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
