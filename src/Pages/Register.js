import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import { BiHide, BiShow } from "react-icons/bi";
import { errorToast, eamilValidation, isEmpty, successToast } from "../Helper/ValidationHelper";
//api service import module
import { Create } from "../ApiServices/UserCrud"
const Register = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    let userName, email, password, confirmPassword = useRef();
    let navigate = useNavigate();
    const createUser = () => {
        const UserName = userName.value;
        const Email = email.value;
        const Password = password.value;
        const ConfirmPassword = confirmPassword.value;

        //validation checking by condition
        if (isEmpty(UserName)) {
            errorToast("Username is required")
        } else if (isEmpty(Email)) {
            errorToast("Email is required")
        }
        else if (eamilValidation(Email) !== true) {
            errorToast("Enter a valid email address")
        }
        else if (isEmpty(Password)) {
            errorToast("Password is required")
        }
        else if (Password.length < 8) {
            errorToast("Password should be greater than or equl 8 characters")
        }
        else if (Password !== ConfirmPassword) {
            errorToast("Password and confirm Password will be the same!")
        } else {
            Create(UserName, Email, Password)
                .then((result) => {
                    if (result){
                        localStorage.setItem("todo-app-user", JSON.stringify(result[1].data))
                        successToast("User Account Create Successfully");
                        navigate("/createTodo")
                    } else {
                        errorToast("Username or Email Address Allready Taken!")
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
                        <h4>Sign up</h4>
                        <p>Get your Chatvia account now.</p>
                    </div>
                    <div className="signUp-form">
                        <div className="px-4 py-2">
                            <label>UserName</label>
                            <input ref={(input) => userName = input} type="text" className=" form-control"
                                placeholder='Enter your username' />
                        </div>
                        <div className="px-4 py-2">
                            <label>Email</label>
                            <input ref={(input) => email = input} type="email" className=" form-control"
                                placeholder='Enter your email' />
                        </div>
                        <div className="px-4 py-2">
                            <label>Password</label>
                            <input ref={(input) => password = input} type={passwordShown ? "text" : "password"} className=" form-control" placeholder='Enter your password' />
                            <span onClick={togglePassword} className="field-icon">
                                {passwordShown ? <BiShow className="showHideIcon" />
                                    : <BiHide className="showHideIcon" />}
                            </span>
                        </div>
                        <div className="px-4 py-2">
                            <label>Confirm Password</label>
                            <input ref={(input) => confirmPassword = input} type={passwordShown ? "text" : "password"} className=" form-control" placeholder='Enter your password' />
                            <span onClick={togglePassword} className="field-icon"> {passwordShown ? <BiShow className="showHideIcon" />
                                    : <BiHide className="showHideIcon" />}</span>
                        </div>
                        <div className="px-4 py-3">
                            <Button onClick={createUser} className="w-100">Sign Up</Button>
                        </div>
                    </div>
                    <p className="text-center py-2">Already have an account ?<Link to="/login"> SignIn</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;

//1.8