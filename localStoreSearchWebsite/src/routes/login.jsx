import React from "react";
import { useState } from "react";

var isLoggingIn = true;

function Login() {
    return (
        <div>
            <SwitchSides/>
        </div>
    );
}

function SwitchSides() {
    let [title, setTitle] = useState('Log In');

    let toggle = () => {
        isLoggingIn = !isLoggingIn;
        setTitle(title == 'Log In' ? 'Sign Up' : 'Log In');  
    }

    return (
        <>
            <h1>{title}</h1>
            <button onClick={toggle}>{title === 'Log In' ? 'Sign Up' : 'Log In'}</button>
            <br/>
            {isLoggingIn ? <LoginQuestions/> : <SignUpQuestions/>}
        </>
    );
}

function LoginQuestions() {
    return (
        <>
            <label>Email</label>
            <input type="text" />
            <br/>
            <label>Password</label>
            <input type="text" />
            <br/>
            <button>Log In to Your Account</button>
        </>
    );
}

function SignUpQuestions() {
    let [user, setUser] = useState('Customer')

    let toggle = () => {
        setUser(user == 'Customer' ? 'Business' : 'Customer');
    }

    return (
        <>
            <button onClick={toggle}>Make a {user == 'Customer' ? 'Business' : 'Customer'} Account</button>
            
            <br/>
            <label>Name</label>
            <input type="text" />
            
            <br/>
            <label>Email</label>
            <input type="text" />

            {user == 'Customer' ? null : <BusinessQuestions/>}
            
            <br/>
            <label>Password</label>
            <input type="text" />


            <br/>
            <button>Create New Profile</button> 
        </>
    );
}

function BusinessQuestions() {
    return (
        <>
            <br/>
            <label>Business Name</label>
            <input type="text" />

            <br/>
            <label>Business Address</label>
            <input type="text" />
        </>
    );
}



export default Login;