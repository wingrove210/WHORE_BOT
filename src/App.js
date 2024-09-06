import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import Layout from './components/Layout';
import Product from './components/Item';
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<Product />} />   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
