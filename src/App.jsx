
import React ,{useState, useEffect} from 'react';
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

    const [email, setEmail]=useState("");
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [loggedin, setLoggedIn]=useState(false);
    const [apireached, setApireached]=useState(false);

    const [isPageLoading, setisPageLoading ] = useState(true);

    const [count, setCount ] = useState(0)


    const[firstarr,setFirstArr]=useState({

                                    user:{
                                      id:12,
                                      firstName:"John",
                                      lastName:"Doe",
                                    },
               }
               )


    useEffect(()=>{

      axios.get('http://api.weatherstack.com/current?access_key=7e9be14a3120f70d8fd052c7141cdfbc&query=New York')
         .then(res=> {
          console.log(res.data);
          
          setApireached(true)
          setisPageLoading(false)
                 })
         .catch( err => console.error(err) );
         console.log(firstarr.user.id) ;
         

             }    

      );







    

     console.log('this text is reqpa')




  return (
    

    <div >

    {
    isPageLoading === true
      ?
    <p   style={{height: 56, color:"red" , width:200 ,margin: "auto" , marginTop:30,}}  > This page is Loading </p>

    :

    <div>

    <br />
          <form className="col-md-12" >
                    <div className="input-group">
                        <input type="text" className="form-control" id="search"  style={{height: 56}} placeholder="Search for..."/>
                        <span className="input-group-btn">
                            <button className="btn btn-default bg-light" type="submit" style={{height: 56}}>Go!</button>
                        </span>
                    </div>
                </form>
       <br />
       <br />
       <br />
      
      <LeftDisplayComponent />

      { /*if else will be here  to load component  logged in after logged in  */}

      <LoginComponent   email={email} setEmail={setEmail} username={username} setUsername={setUsername}  password={password} setPassword={setPassword} loggedin={loggedin} setLoggedIn={setLoggedIn}  />
      
        
      

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      </div>
      
      }
     
       
    </div>
      
  );
}

export default App;
