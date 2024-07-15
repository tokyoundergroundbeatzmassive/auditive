import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Menu from './components/Menu/Menu';

function App() {
  const [activeMenu, setActiveMenu] = useState('new-tunes');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="App">
      <Header />
      <Menu activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      <MainContent activeMenu={activeMenu} />
      <Footer />
    </div>
  );
}

export default App;