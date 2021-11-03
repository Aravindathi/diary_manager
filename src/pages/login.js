import "./login.css";
import { Link } from "react-router-dom";
import "./login.css"
import { useHistory } from "react-router";

import React from "react";

const Login = () => {
  
  const history = useHistory()
  const loginHandler = (e) => {
    e.preventDefault()
    console.log(e)

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: e.target[0].value,
        userPassword: e.target[1].value,
      }),
    };
    fetch("https://diarymanager.herokuapp.com/login", requestOptions)
      .then((response) => response.json())
      .then((data) => checkToken(data))
      
      const checkToken =(data) => {
        if(data.token)
        localStorage.setItem("token",data.token) 
        localStorage.setItem("userId",data.id)  
        history.push("/")  
        window.location.reload()   

      }
  }
  return (
    <div className="login-bg">
      <div className="login-box">
        <form onSubmit={loginHandler}>
          <h1>LOGIN</h1>
          <label htmlFor="userName">USERNAME</label><br/>
          <input type="text" name="userName" id="userName"></input>
          <br />
          <br />
          <label htmlFor="password">PASSWORD</label><br/>
          <input type="password" name="password" id="password"></input>
          <br/>
          <p>
            Not an existing user? <Link to="/signup">SIGNUP</Link>
          </p>
          <br/>
          <button type="submit" className="login-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
