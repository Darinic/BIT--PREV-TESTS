import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";



export default (props) => {

  const navigate =useNavigate()
  const onLogout = () => {
    axios.get('/api/users/logout')
    .then(resp => {
      console.log(resp)
      if(!resp.data.id) {
        props.setLogin(false)
        navigate('/')
      }
    })
  }
//     try{
//     axios.get('/api/users/logout')
//       props.isLoggedIn = false
//     } catch{
//       props.isLoggedIn = true
//     }
// }

  return (
    <div className="header">
      <div className="ui menu">
        <div style={{ padding: "1rem" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/GoFundMe_logo.svg"
            alt="goFundMe logo"
          />
        </div>
        <Link className="item" to="/">
          Homepage
        </Link>
        <Link className="item" to="/howitworks">
          How it works
        </Link>
        <Link className="item" to="/projects">
          Current/Past projects
        </Link>
        <div className="right menu">
          {props.loggedIn === false && (
            <Link className="item" to="/registration">
              Sign up
            </Link>
          )}
          {props.loggedIn === false && (
            <Link className="item" to="/login">
              Log-In
            </Link>
          )}
          {props.loggedIn === true && props.userRole === 0 && (
            <Link className="item" to="/createCrowdFounding">
              <strong>Create a Crowdfunder</strong>
            </Link>
          )}
          
          {props.userRole === 1 && (
            <Link className="item" to="/admin">
              Admin panel
            </Link>
          )}
          {props.loggedIn === true && (
            <button onClick={onLogout} style={{border:'none'}} className="item" to="/logout">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
