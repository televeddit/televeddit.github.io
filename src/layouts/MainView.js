import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const MainView = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <main style={{
        position: "relative",
        marginRight: "310px",
        marginLeft: "5px",
        marginTop: "5px",
        overflow: "auto",
      }}>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default MainView;
