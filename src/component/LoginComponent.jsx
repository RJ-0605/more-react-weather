 
 import React , { useState, useEffects }from 'react';
 import '../NewCssApp.css';
 import '../Arrangeapp.css';
 


  export default function LoginComponent(props) {



 	function handleEmail(event){
     props.setEmail(event.target.value)
  }
  function handleUsername(event){
     props.setUsername(event.target.value)
  }
  function handlePassword(event){
     props.setPassword(event.target.value)
  }

  
// initialize confirm password
const [confirm_password, setConfirm_Password]=useState("");

  function handleconfirmPassword(event){
  setConfirm_Password(event.target.value)
}
  





    function login(event) {
      event.preventDefault();
      // Check If User Data Exists In LocalStorge
      const user = localStorage.getItem(props.email);
      if (!user) {
        return alert('User Does Not Exists');
      }
      // Check is Entered Password Entered matches data in localstorage
      const userData = JSON.parse(user);
      if (userData.password !== props.password) {
        return alert('Invalid Password');
      }
      // Set Logged In To T
  
      props.setLoggedIn(true);  }
  
   

    
   /// end of cod 
   
    function signup(event) {
      event.preventDefault();
     // Check if Password matches Confirm Password
      if (props.password !== confirm_password) {
        return alert('password mismatch');
      }
      // Check If User Data Exists In LocalStorge
      const user = localStorage.getItem(props.email);
      console.log(user);
      if (user) {
        return alert('User Already Exists');
      }
      // Save User To LocalStorage
      const userData = {
        email: props.email,
        password: props.password,
        userSearch:[]
      };
      localStorage.setItem(props.email, JSON.stringify(userData));
      // Set Logged In To false since this is signup
      props.setLoggedIn(false);
     }



 	return (
    <div>
 
            
                 
   			
           {props.loggedin=== true ? <p>" Hello Welcome {props.email}"</p> :



              <div className="rightcolumn bg-transparent ">

              <form onSubmit={login}>
              <p> please login below </p>
              <br />
              <br />
              <label>Email </label>
              <input type="text" value={props.email} onChange={handleEmail} />
              <br />
              <br />
              <label>Password </label>
              <input type="text" value={props.password} onChange={handlePassword} />
              <br />
              <button  type="submit">Login</button>
                </form>
              <br />
              <br />
             
              <br /> 

              <form onSubmit={signup}>
              <p> please signup below </p>
              <label>Email </label>
              <input type="text" value={props.email} onChange={handleEmail} />
              <br />
              <br />
              <label>Password </label>
              <input type="text" value={props.password} onChange={handlePassword} />
              <br />
              <br />
              <label>confirm Password </label>
              <input type="text" value={confirm_password} onChange={handleconfirmPassword} />

              <button  type="submit">Login</button>
                </form>

              
              </div> 



            }
       
        
   			
 		</div>

 	);

 }

 