
import logout from "./logout.png"
import "./header.css"
import React from 'react'

const Header = () => {


    const logoutHandler =() => {
        localStorage.removeItem("token")
        window.location.reload() 
    }
    return (
        <div className="header">
            <h1 className="title">TIME KEEPER</h1>
            <div className="btn-holder"><img src={logout} onClick ={logoutHandler} className="logout-btn"></img></div>
            
        </div>
    )
}

export default Header
