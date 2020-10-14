// assignment to to be submitted to mest-weather-two



import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LoginComponent from './component/LoginComponent';

import LeftDisplayComponent from './component/LeftDisplayComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './NewCssApp.css';
import './Arrangeapp.css';
import './weather.css';

// the josn files will come here 
import weatherjson from './weatherdata.json'


                                          

function App() {


  // <input   placeholder="Search.."  style={{float: 'right', padding: '6px', border: 'none', marginTop: '15px', marginRight: '16px',fontSize: '17px',}} />

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedIn] = useState(false);
  const [apireached, setApireached] = useState(false);

  const [isPageLoading, setisPageLoading] = useState(true);

  const [count, setCount] = useState(0)
  const [searchHistory, setSearchHistory] = useState([])


  const [firstarr, setFirstArr] = useState({

    user: {
      id: 12,
      firstName: "John",
      lastName: "Doe",
    },
  }
  )

  const saveSearchHistory = (search) => {
    // Check If User If Logged In
    if (loggedin) {
      // Get Existing Data
      // first set existingSearchesJSON as data gotten from local storage
      // from previous searches 
      const existingSearchesJSON = localStorage.getItem('searchHistory');
      //check if  existingSearchesJSON exists, 
      // if not , that is if its local storage has not been created
      // or this is the programs first time of runnning then make existingSearches= []
      const existingSearches = existingSearchesJSON ? JSON.parse(existingSearchesJSON) : [];
      //here is when if get data from search i can reduce the number displayed 
      // from existing searches to screen by running math to eject only a particular number
      // and saved to the variable  
      console.log(existingSearches);

      // Add New Data from the search argument
      existingSearches.push(search);
      console.log(existingSearches);

      // Save Data to localStorage
      //under key  'search history' and the string data as 'existing searches'
      localStorage.setItem('searchHistory', JSON.stringify(existingSearches));

      // Set Saved History To State
      setSearchHistory(existingSearches);
    }
  }


  useEffect(() => {

    axios.get('http://api.weatherstack.com/current?access_key=7e9be14a3120f70d8fd052c7141cdfbc&query=New York')
      .then(res => {
        // anytime you get data the data is shown under console.log
        console.log(res.data);
        // the save search history  also saves that data 
        saveSearchHistory(res.data);

        setApireached(true)
        setisPageLoading(false)
      })
      .catch(err => console.error(err));
    console.log(firstarr.user.id);


  }, []);

  console.log('this text is reqpa');


  return (
    <div >
      <div>
        <br />
        <form className="col-md-12" >
          <div className="input-group">
            <input type="text" className="form-control" id="search" style={{ height: 56 }} placeholder="Search for..." />
            <span className="input-group-btn">
              <button className="btn btn-default bg-light" type="submit" style={{ height: 56 }}>Go!</button>
            </span>
          </div>
        </form>
        <br />
        <br />
        <br />

        <LeftDisplayComponent />

        { /*if else will be here  to load component  logged in after logged in  */}

        <LoginComponent email={email} setEmail={setEmail} username={username} setUsername={setUsername} password={password} setPassword={setPassword} loggedin={loggedin} setLoggedIn={setLoggedIn} />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>

  );
}

export default App;
