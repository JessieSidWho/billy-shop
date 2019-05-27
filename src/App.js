import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Map from './containers/Map';
import BlackSmoke from './images/waves.jpeg';

function App() {
  return (
    <div style={{ backgroundImage: `URL(${BlackSmoke})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
      <About />
      <div className='row justify-content-md-center text-center'>
        <div className='col-md-12'>
          <h3 className='mb-5'>We are located at <strong>1546 Palos Verdes Mall</strong>, Walnut Creek, CA</h3>
        </div>
      </div>

           <Map /> 
    </div>
  );
}

export default App;
