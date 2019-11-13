import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
    return (
        <div id="formfluid" class="bg-img">

            <form id="login">
                <h1 id="login-title">Login</h1>
                <div className="col-md-4">
                    <input
                        type="text"
                        className="login-form-control"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        width="100px"
                        required
                    />
                    <input
                        type="text"
                        className="login-form-control"
                        placeholder="Password"
                        aria-describedby="inputGroupPrepend"
                        width="100px"
                        required
                    />

                </div>
                <div className="buttonWrapper">
                    <button type="button" className="login-submit" class="btn btn-secondary"><NavLink to="/home">Login</NavLink></button>

                    <button type="button" className="login-submit" class="btn btn-secondary">Sign Up</button>
                </div>


            </form>
        </div>
    )
}

export default Login;