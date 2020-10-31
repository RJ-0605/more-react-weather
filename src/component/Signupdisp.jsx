

import React from 'react';
import '../NewCssApp.css';
import '../Arrangeapp.css';




export default function Signupdisp(props) {

    return (

        <div className=" container d-flex h-100 m-5 ">
            <div className="card">
                <div className="card-header">
                    <h3>Sign Up</h3>
                </div>
                <div >
                    <form onSubmit={props.signup} style={{ padding: 21 }}>

                        <div >
                            <label>Email</label>
                            <input type="text" value={props.email} onChange={props.handleSignupEmail} className="form-control" />
                        </div>

                        <div >
                            <label >Password</label>
                            <input type="password" value={props.password} onChange={props.handleSignupPassword} className="form-control" />
                        </div>

                        <div >
                            <label >Confirm Password</label>
                            <input type="password" value={props.password} onChange={props.handleSignupConfirmPassword} className="form-control" />
                        </div>

                        <br />



                        <div className="form-group">
                            <button onClick={props.login}  >Login</button>
                        </div>


                    </form>

                </div>




            </div>
        </div>


    )


}