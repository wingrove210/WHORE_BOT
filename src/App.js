import './App.css';
import './fonts/fonts.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Product from './components/Item';
import Main from './components/Main';
import Error from './components/Error';
import { useState, useEffect } from 'react';


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
export const TelegramWebApp = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const webApp = window.Telegram.WebApp;

      // Инициализируем WebApp
      webApp.ready();

      // Получаем данные пользователя
      const userData = webApp.initDataUnsafe.user;
      setUser(userData);

      // Пример: изменение цвета заголовка
      webApp.setHeaderColor('bg_color', '#ffffff');
    }
  }, []);
}
export default App;
