
import React, { useState, useEffects } from 'react';
import '../NewCssApp.css';
import '../Arrangeapp.css';
import Logindisp from './Logindisp'
import Signupdisp from './Signupdisp'




export default function LoginComponent(props) {


  const [username, setUsername] = useState("")

  function handleUsername(event) {
    props.setUsername(event.target.value)
  }


  // initialize confirm password
  const [loginEmail, setLoginEmail] = useState("")

  function handleLoginEmail(event) {
    setLoginEmail(event.target.value);
  }

  const [loginPassword, setLoginPassword] = useState("")

  function handleLoginPassword(event) {
    setLoginPassword(event.target.value)
  }


  function login(event) {
    event.preventDefault();
    // Check If User Data Exists In LocalStorge

    const user = localStorage.getItem(`${loginEmail}`);
    if (!user) {
      alert('User Does Not Exists');
    }

    // Check is Entered Password Entered matches data in localstorage

    else {
      const userData = JSON.parse(user);
      if (userData) {
        if (userData.password !== loginPassword) {
          alert('Invalid Password');
          props.setLoggedIn(false);
        }
        // Set Logged In To T
      }
      props.setLoggedIn(true);
    }

  }




  const [toggleLogin, setToggleLogin] = useState(false)

  function Switchlogin() {

    // already under a tenary to check not loggedin 
    if (toggleLogin) {
      setToggleLogin(false)
    }
    else {
      setToggleLogin(true)
    }


    // props.setHistoryFocus(true)

  }



  /// end of cod 

  const [signupEmail, setSignupEmail] = useState("")

  function handleSignupEmail(event) {
    setSignupEmail(event.target.value);
  }

  const [signupPassword, setSignupPassword] = useState("")

  function handleSignupPassword(event) {
    setSignupPassword(event.target.value)
  }

  const [signupConfirmPassword, setSignupConfirmPassword] = useState("")

  function handleSignupConfirmPassword(event) {
    setSignupConfirmPassword(event.target.value)
  }

  function signup(event) {
    event.preventDefault();
    // Check if Password matches Confirm Password
    if (signupPassword !== signupConfirmPassword) {
      return alert('password mismatch');
    }
    // Check If User Data Exists In LocalStorge
    const user = localStorage.getItem(signupEmail);
    if (user) {
      alert('User Already Exists');
    }
    // Save User To LocalStorage
    const userData = {
      email: signupEmail,
      password: signupPassword,
      userSearch: []
    };
    localStorage.setItem(signupEmail, JSON.stringify(userData));
    // Set Logged In To false since this is signup
    props.setLoggedIn(false);
  }






  return (
    <div>




      {props.loggedIn === true ? props.historyfocus ?

        <div className="rightcolumn ">




          {props.historyfocusdet}

        </div>
        :

        console.log("logged in")
        // <p style={{ color: "white", margin: "3rem 6rem 0 0", fontSize: "30px" }}> Hello Welcome {props.email}</p>



        :



        <div className="rightcolumn bg-transparent ">

          <div className="button-tog">
            <button className="rounded" onClick={() => Switchlogin()}>Toggle for  Login/Signup</button>
          </div>

          {/* button will load login or signup component  */}

          {/* login component  */}

          {/* <Logindisp /> */}

          {/* signup component  */}

          {/* <Signupdisp  /> */}





          {toggleLogin ?
            <Signupdisp
              signup={signup}
              handleSignupEmail={handleSignupEmail}
              handleSignupPassword={handleSignupPassword}
              handleSignupConfirmPassword={handleSignupConfirmPassword}
              signupEmail={signupEmail}
              signupPassword={signupPassword}
              signupConfirmPassword={signupConfirmPassword} />
            :
            <Logindisp
              login={login}
              handleLoginEmail={handleLoginEmail}
              handleLoginPassword={handleLoginPassword}
              loginEmail={loginEmail}
              loginPassword={loginPassword} />
          }

          <br />

        </div>



      }



    </div>


  );

}

