import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import stylesheet from '../styles/main.module.scss';

const MainView = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <main className={stylesheet.main}>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default MainView;
