import React, { useState } from "react";

import "./login.scss";

const Login = () => {
    const [clicked, setClicked] = useState();

    const onSignUpClick = () => {
        setClicked(!clicked);
    };

    return (
        <>
            <div className="form-container">
                <div className="form-structor">
                    <div
                        className={!clicked ? "signup" : "signup slide-up"}
                    >
                        <h2
                            className="form-title"
                            id="signup"
                            onClick={() => onSignUpClick(clicked)}
                        >
                            <span>or</span>Sign up
                        </h2>
                        <div className="form-holder">
                            <input
                                type="text"
                                className="input"
                                placeholder="Username"
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                            />
                        </div>
                        <button className="submit-btn">Sign up</button>
                    </div>

                    <div className={!clicked ? "login slide-up" : "login"}>
                        <div className="center">
                            <h2
                                className="form-title"
                                id="login"
                                // onClick={this.onSignInClick}
                                onClick={() => onSignUpClick(clicked)}
                            >
                                <span>or</span>Log in
                            </h2>
                            <div className="form-holder">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Username"
                                />
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                />
                            </div>
                            <label className="forgot-password">
                                Forgot your password
                            </label>
                            <div
                                className="errorMessage"
                                style={{
                                    color: "red",
                                    fontSize: "14px",
                                }}
                            >
                                {/* {this.state.errMessage} */}
                            </div>
                            <button
                                className="submit-btn"
                                onClick={() => {
                                    this.handleLogin();
                                }}
                            >
                                Log in
                            </button>

                            <div className="social-login">
                                <h2>Or Login with</h2>

                                <div className="socials">
                                    <span className="social">Google</span>
                                    <span className="social">
                                        Facebook
                                    </span>
                                    <span className="social">Twitter</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
