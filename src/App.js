import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Map from './containers/Map';
import Form from './containers/Form';
import BlackSmoke from './images/yellow.jpg';

function App() {
  return (
    <div style={{ backgroundImage: `URL(${BlackSmoke})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', fontFamily: `Quicksand`, backgroundColor: `rgba(255,255,255,.3)` }}>

      <Navbar />
      <About />

      <div id='location' className='row justify-content-md-center text-center'>
        <div className='col-md-12 mt-5'>
          <h3 className='mb-5'>We are located at <strong>1546 Palos Verdes Mall</strong>, Walnut Creek, CA</h3>
        </div>
      </div>

           <Map /> 

           <Form />

    </div>
  );
}

export default App;
