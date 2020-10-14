

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








  
  






  useEffect(() => {

    setTimeout(function(){
      apiWeather()
     
   },2000)
   
  }, []);

  
  function apiWeather(){

    setisPageLoading(true)
    const apiKey='ec7d0fcad25a0ade0cc1fb7d61dd869b';

    navigator.geolocation.getCurrentPosition(position=> {

      let queryWord= `${position['coords'].latitude},${position['coords'].longitude}`;
      
    
   console.log("queryWord",queryWord)
    
    axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${queryWord}`, {
        
      })
      .then(function (response) {
        console.log("Weather Page",response.data);
        setWeatherIcon(`${response.data['current'].weather_icons[0]}`)
        setTemperatur(`${response.data['current'].temperature}°C`);
        setLocation(`${response.data['location'].name} , ${response.data['location'].country}`);
        setDate(`${response.data['location'].localtime}`)
        setisPageLoading(false)
       // localStorage.clear('userSearchResults');


       
        
      })
      .catch(function (error) {
        console.log(error);
      })
      
 
  
       
  })
     
}

  console.log('this text is reqpa');




  const saveSearchHistory = (weatherdata) => {
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
      existingSearches.push(weatherdata);
      console.log(existingSearches);

      // Save Data to localStorage
      //under key  'search history' and the string data as 'existing searches'
      localStorage.setItem('searchHistory', JSON.stringify(existingSearches));

      // Set Saved History To State
      setSearchHistory(existingSearches);
      
      // what will be displayed on screen  only five 
      // work on searchHistory value to dispay only five 

      let OnlyFive= searchHistory.slice(Math.max(searchHistory.length - 5, 0))
      // console.log("arr",OnlyFive)
      
      
  
  
          let getData= OnlyFive.map((r,index)=>{
            return <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{r.location}</td>
                    <td>{r.date}</td>
                    <td><img src={r.weatherIcon} alt="weaIcon"/></td>
                    <td>{r.temperature}</td>
                  </tr>
          })

     setSearchHistory(getData)
     console.log(searchHistory)

     // end of if loggedin below
    }
    // end of save search history
  }


  // existing searches will be regulated 

  function searchUserResult( ){

 

    if(loggedin===true){
      let userSearchVar= JSON.parse(localStorage.getItem('userSearchResults'))
  
      let OnlyFive= userSearchVar.slice(Math.max(userSearchVar.length - 5, 0))
      // console.log("arr",OnlyFive)
    
    
      let getData= OnlyFive.map((r,index)=>{
         return <tr key={index}>
                <th scope="row">{index}</th>
                <td>{r.location}</td>
                <td>{r.date}</td>
                <td><img src={r.weatherIcon} alt="weaIcon"/></td>
                <td>{r.temperature}</td>
              </tr>
       })
    
       setsearchResults(getData)
    }
   
  }








// handle value from form
  function handleSearch(event) {
    setSearchForm(event.target.value)
  }

  function searchWeather(event){
    event.preventDefault()
  
    apiWeatherSearch(searchForm)
}

// cathcing the datain format of query word before passing it to apiWeatherSearch
function apiWeatherSearch(queryWord){
    

  setisPageLoading(true)
  const apiKey='ec7d0fcad25a0ade0cc1fb7d61dd869b';
  
  axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${queryWord}`, {
      
    })
    .then(function (response) {
      console.log("Weather Page",response.data);
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
       
        saveSearchHistory(weatherdata)
          

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

