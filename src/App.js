import Footer from 'commonComponents/Footer';
import Header from 'commonComponents/Header';
import Modal from 'commonComponents/Modal';
import Overlay from 'commonComponents/Overlay';
import Main from 'homeComponents';
import React from 'react'


function App() {
  return (
    <div>
      <Header />
      <Overlay />
      <Main />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
