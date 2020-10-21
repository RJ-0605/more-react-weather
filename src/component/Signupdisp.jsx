

import React from 'react';
import '../NewCssApp.css';
import '../Arrangeapp.css';




export default function Signupdisp(props) {

    return (

        <form>
            <p> please signup below </p>
            <label>Email </label>
            <input type="email" value={props.email} onChange={props.handleSignupEmail} />
            <br />
            <br />
            <label>Password </label>
            <input type="password" value={props.password} onChange={props.handleSignupPassword} />
            <br />
            <br />
            <label>confirm Password </label>
            <input type="password" value={props.confirmPassword} onChange={props.handleSignupConfirmPassword} />

            <button type="submit" onClick={props.signup}>Signup</button>
        </form>


    )


}