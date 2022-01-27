import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
