import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import BlackSmoke from './images/blacksmoke.jpg';
// import Location from './containers/Location';

function App() {
  return (
    <div style={{backgroundImage: `URL(${BlackSmoke})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <Navbar/>
      <About/>
    </div>
  );
}

export default App;
