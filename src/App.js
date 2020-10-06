import React from 'react';
import dogpic from './doggie.jpg';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';

import TenthComponent from './TenthComponent';
import './App.css';
import './NewCssApp.css';
import './Arrangeapp.css';


function App() {
  return (
    <div >

      <FirstComponent />
      <br/>
      <img src={dogpic} className="displayed" />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <SecondComponent  />

      <ThirdComponent />
        <div > </div>
      <br/>
      <br/>
      <div className="clearboth"> </div>
      <FourthComponent />
      <br/>
      
      <br/>
      <br/>
      <TenthComponent />
      <br/>
      <br/>
       
    </div>
      
  );
}

export default App;
