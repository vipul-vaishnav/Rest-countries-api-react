import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = ({ switchTheme, theme }) => {
  return (
    <>
      <Header switchTheme={switchTheme} theme={theme} />
      <Outlet />
    </>
  );
};

export default Layout;
