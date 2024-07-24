import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Menu from './components/Menu/Menu';

function App() {
  const [activeMenu, setActiveMenu] = useState(() => {
    const hash = window.location.hash.slice(1);
    return ['new-tunes', 'past-releases', 'contact'].includes(hash) ? hash : 'new-tunes';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (['new-tunes', 'past-releases', 'contact'].includes(hash)) {
        setActiveMenu(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    window.location.hash = menu;
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