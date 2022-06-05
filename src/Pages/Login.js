import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import { BiHide, BiShow } from "react-icons/bi";
import { errorToast, isEmpty, eamilValidation, successToast } from "../Helper/ValidationHelper";
import { userLogin } from "../ApiServices/UserCrud"
const Login = () => {
    let navigate = useNavigate();
    // useEffect(()=>{
    //     if(localStorage.getItem("token")){
    //         navigate("/")
    //     }
    // })
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }
    let email, password= useRef();
    const loginHandle = () => {
        const Email = email.value;
        const Password = password.value;
        
        if (isEmpty(Email)) {
            errorToast("Email is required")
        }
        else if (eamilValidation(Email) !== true) {
            errorToast("Enter a valid email address")
        }
        else if (isEmpty(Password)) {
            errorToast("Password is required")
        } else {
            userLogin(Email, Password)
                .then((result) => {
                    if (result) {
                        successToast("Login success")
                        localStorage.setItem("token", JSON.stringify(result[1].token))
                        navigate("/createTodo")
                    } else {
                        console.log("error")
                    }
                })
        }
    }
    return (
        <div>
            <div className="container">
                <div className="mx-auto registration-form">
                    <div className="py-5 text-center">
                        <img className="logo" src={logo} alt="" />
                    </div>
                    <div className="text-center content">
                        <h4>Sign in</h4>
                        <p>Sign in to continue to Chatvia.</p>
                    </div>
                    <div className="signUp-form">
                        <div className="px-4 py-2">
                            <label>Email</label>
                            <input ref={(input) => email = input} type="email" className=" form-control"
                                placeholder='Enter your email' />
                        </div>
                    </div>
                    <div className="px-4 py-2">
                        <label>Password</label>
                        <input ref={(input) => password = input} type={passwordShown ? "text" : "password"} className=" form-control" placeholder='Enter your password' />
                        <span onClick={togglePassword} className="field-icon">
                            {passwordShown ? <BiShow className="showHideIcon" />
                                : <BiHide className="showHideIcon" />}
                        </span>
                    </div>
                    {/* <div className="px-4 py-2">
                        <label>Confirm Password</label>
                        <input ref={(input) => confirmPassword = input} type={passwordShown ? "text" : "password"} className=" form-control" placeholder='Enter your password' />
                        <span onClick={togglePassword} className="field-icon">
                            {passwordShown ? <BiShow className="showHideIcon" />
                                : <BiHide className="showHideIcon" />}
                        </span>
                    </div> */}
                    <div className="px-4 py-3">
                        <Button onClick={loginHandle} className="w-100">Sign In</Button>
                    </div>
                    <p className="text-center py-2">Don't have an account ?<Link to="/register"> Signup now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;