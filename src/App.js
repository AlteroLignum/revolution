import React from 'react';
import './App.css';
import Market from './components/market/Market';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Choose from './components/choosing/Choose';
import ErrorBoundary from './components/ErrorBoundary';
import Join from './components/joining/Join';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Navigation />
        <main>
          <Home />
          <Market />
          <Choose />
          <Join/>
        </main>
        <Footer/>
      </ErrorBoundary>
    </>
  );
}

export default App;
