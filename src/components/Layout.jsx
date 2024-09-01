import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
function Layout() {
    return (
      <div>
        <Header />
            <Home/>
        <Footer />
      </div>
    );
  }

export default Layout;