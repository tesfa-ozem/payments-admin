import React from 'react'
import './login.scss'
import { useHistory } from "react-router-dom";
export default function Login() {
    const history = useHistory();
    function handleClick() {
        history.push("/dashboard");
    }
    return (
        <div className='login-container'>
            <div className='form-conatiner'>
                <h2>PAYMENTS</h2>
                <span>Welcome back please login to your account</span>
                <div className="form-group">
                    {/* <label htmlFor="formGroupExampleInput">User name</label> */}
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Username"
                    />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="formGroupExampleInput">Password</label> */}
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Password"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="checkbox"
                        className="form-control"
                        id="formGroupExampleInput"
                        name="rememberme"
                    />
                    <label for="rememberme">Rember me</label>
                </div>
                <div className="form-button-group">
                    <button onClick={handleClick}>Login</button>
                </div>
            </div>
            <div className='login-logo'>

            </div>

        </div>
    )
}