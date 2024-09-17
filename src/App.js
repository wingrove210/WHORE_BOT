import './App.css';
import './fonts/fonts.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Product from './components/Item';
import Main from './components/Main';
import Error from './components/Error';
import Loading from './components/Loading';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<Product />} /> 
          <Route path="*" element={<Error />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
