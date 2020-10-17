

// second weather app assignment

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


                                          

export default function App() {


  // <input   placeholder="Search.."  style={{float: 'right', padding: '6px', border: 'none', marginTop: '15px', marginRight: '16px',fontSize: '17px',}} />

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedIn] = useState(false);
  const [apireached, setApireached] = useState(false);

  const [isPageLoading, setisPageLoading] = useState(true);
  

  const [count, setCount] = useState(0)
  const [defaultweather, setDefaultWeather] = useState(false);
  const [historyfocus, setHistoryFocus ] = useState(false)
  const [historyfocusdet, setHistoryFocusDet] = useState(false)
// search form 

 const [searchForm, setSearchForm] = useState("")

// set state for search 
  const [search, setSearch] = useState("")

  const [searchHistory, setSearchHistory] = useState([])

  // -----------------------------------------------------------
  const [temperature,setTemperatur]=useState(null);
  const [weatherIcon,setWeatherIcon]=useState(null)
  const [location,setLocation]=useState(null)
  const [date,setDate]=useState(null);

  const [searchResults,setsearchResults]=useState([])
  const [firstarr, setFirstArr] = useState({

    user: {
      id: 12,
      firstName: "John",
      lastName: "Doe",
    },
  }
  )








  
  


// in the beginning 



  useEffect(() => {

    setTimeout(function(){
      apiWeather()
      
     
   },2000)
   
  }, []);

  
  function apiWeather(){

    setisPageLoading(true)
    { isPageLoading === true ? console.log("getting default weather for location")
    :
    console.log("default weather is gotten")}

    const apiKey='ec7d0fcad25a0ade0cc1fb7d61dd869b';

    navigator.geolocation.getCurrentPosition(position=> {

      let queryWord= `${position['coords'].latitude},${position['coords'].longitude}`;
      
    
   console.log("queryWord",queryWord)
    
    axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${queryWord}`, {
        
    }).then(function (response) {
      console.log("Weather Page", response.data);
      setWeatherIcon(`${response.data['current'].weather_icons[0]}`)
      setTemperatur(`${response.data['current'].temperature}°C`);
      setLocation(`${response.data['location'].name} , ${response.data['location'].country}`);
      setDate(`${response.data['location'].localtime}`)
      setisPageLoading(false)


      let weatherdatalocate = {
        weatherIcon: `${response.data['current'].weather_icons[0]}`,
        temperature: `${response.data['current'].temperature}°C`,
        location: `${response.data['location'].name} , ${response.data['location'].country}`,
        date: `${response.data['location'].localtime}`
      }
      
      // weather from default location 
      setDefaultWeather(weatherdatalocate)

       
        
      })
      .catch(function (error) {
        console.log(error);
      }  
      )

       
  })
     
 }


  // console.log('this text is reqpa');







  const saveSearchHistory = (weatherdata) => {

    //  NB! Check If User If Logged In
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
      existingSearches.push(weatherdata);
      console.log(existingSearches);

      // Save Data to localStorage
      //under key  'search history' and the string data as 'existing searches'
      localStorage.setItem('searchHistory', JSON.stringify(existingSearches));

      // Set Saved History To State
      setSearchHistory(existingSearches);
      // console.log(searchHistory)
      // what will be displayed on screen  only five 

    }
    // end of save search history
  }


  

 


// handle value from form
  function handleSearch(event) {
    setSearchForm(event.target.value)
  }


    // when the search button is clicked 

  function searchWeather(event){
    event.preventDefault()
  
    apiWeatherSearch(searchForm)
}



// catching the datain format of query word before passing it to apiWeatherSearch
function apiWeatherSearch(queryWord){
    

  setisPageLoading(true)
  const apiKey='ec7d0fcad25a0ade0cc1fb7d61dd869b';
  
  axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${queryWord}`, {
      
    })
    .then(function (response) {
      console.log("Weather Page",response.data);

      // setting the values to the state before usage 

      setWeatherIcon(`${response.data['current'].weather_icons[0]}`)
      setTemperatur(`${response.data['current'].temperature}°C`);
      setLocation(`${response.data['location'].name} , ${response.data['location'].country}`);
      setDate(`${response.data['location'].localtime}`)
      setisPageLoading(false)
       

     let   weatherdata = {
      weatherIcon:`${response.data['current'].weather_icons[0]}`,
      temperature:`${response.data['current'].temperature}°C`,
      location:`${response.data['location'].name} , ${response.data['location'].country}`,
      date:`${response.data['location'].localtime}`
                 }




        // i set an array of how i want to store data from response 

        // i want to save before i display 
       
        saveSearchHistory(weatherdata)

        // display of current results here 
        // current results is weatherdata to be passed to props to display on screen 
        console.log(weatherdata)
          

    })
    .catch(function (error) {
      console.log(error);
    })

  }




    return (
      <div >
        <div>
          <br />
          <form className="col-md-12" onSubmit={searchWeather} >
            <div className="input-group">
              <input type="text" className="form-control" value={searchForm} onChange={handleSearch} style={{ height: 56 }} placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-default bg-light" type="submit" style={{ height: 56 }}>Go!</button>
              </span>
            </div>
          </form>
          <br />
          <br />
          <br />

          <LeftDisplayComponent searchHistory={searchHistory} 
          defaultweather={defaultweather} setHistoryFocus={setHistoryFocus}
          historyfocus={historyfocus} historyfocusdet= {historyfocusdet} 
          setHistoryFocusDet={setHistoryFocusDet}  />

          { /*if else will be here  to load component  logged in after logged in  */}

          <LoginComponent email={email} setEmail={setEmail} username={username} 
          setUsername={setUsername} password={password} setPassword={setPassword}
          loggedin={loggedin} setLoggedIn={setLoggedIn}
          setHistoryFocus={setHistoryFocus} historyfocus={historyfocus}
          historyfocusdet={historyfocusdet} setHistoryFocusDet={setHistoryFocusDet} />

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


