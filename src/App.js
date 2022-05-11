import React from 'react';
import Layout from './components/Layout';
import Container from './components/Container';
import CountryDetail from './components/CountryDetail';
import useLocalStorage from 'use-local-storage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  // theme switcher
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout switchTheme={switchTheme} theme={theme} />}>
            <Route index element={<Container />} />
            <Route path="/countries/:name" element={<CountryDetail />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
