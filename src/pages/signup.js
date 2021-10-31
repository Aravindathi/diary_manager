import React from "react";
import { Link } from "react-router-dom";
import "./signup.css"
import { useHistory } from "react-router";

const Signup = () => {

  const history = useHistory();
  const signupHandler =(e) =>{
    e.preventDefault()
    console.log(e)

    let userName = e.target[0].value
    let userEmail = e.target[1].value
    let userPassword = e.target[2].value
    let userCnfrmPassword = e.target[3].value
  if(userPassword !== userCnfrmPassword){
      alert("The password and confirm password do not match")
  }
  else{
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
   userName : e.target[0].value,
   userEmail : e.target[1].value,
   userPassword : e.target[2].value,
    })
};
fetch('http://localhost:3001/signup', requestOptions)
    .then(response => response.json())
    .then(res => triggerLogin(res))
 }
}
 
 const triggerLogin =(data) => {
   if(data)
  history.push("/login")  
  window.location.reload()   
 }

  
  return (
    <div className="signup-bg">
      <div className="signup-box">
        <form onSubmit={signupHandler}>
          <h1 className="signup">SIGNUP</h1><br/>
          <label htmlFor="userName">USERNAME</label><br/>
          <input type="text" name="userName" id="userName"></input>
          <br />
          <br />
          <label htmlFor="email">EMAIL ID</label><br/>
          <input type="email" name="email" id="email"></input>
          <br />
          <br />
          <label htmlFor="password">PASSWORD</label><br/>
          <input type="password" name="password" id="password"></input>
          <br />
          <br />
          <label htmlFor="cnfrm-password">CONFIRM PASSWORD</label><br/>
          <input
            type="password"
            name="cnfrm-password"
            id="cnfrm-password"
          ></input>
          <br/>
          
          <p>
            Are you an existing user? <Link to="/login">LOGIN</Link>
          </p>
          <button type="submit" className="signup-btn">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
