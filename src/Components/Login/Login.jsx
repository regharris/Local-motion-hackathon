import React from "react";

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
                        required
                    />
                    <input
                        type="text"
                        className="login-form-control"
                        placeholder="Password"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                </div>
                <button className="login-submit">
                    Submit
        </button>
            </form>
        </div>
    )
}

export default Login;