import React, { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/header/Header";
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";
import Homepage from "./components/Homepage/Homepage.js";
import AdminArea from "./components/admin_area/AdminArea.js";
import "bootstrap/dist/css/bootstrap.min.css";
import HowItWorks from "./components/howitworks/HowItWorks.js";
import CrowdFundCreate from "./components/crowdfunder-create/CrowdFundCreate.js";
import CFlist from "./components/CfList/CfList.js";
import MyFundraisers from "./components/myFundraisers/MyFundraisers";
import CrowdFundEdit from "./components/crowdfunder-edit/CrowdFundEdit";

export default () => {
const [isLoggedIn, setIsloggedIn] = useState(false);
const [userRole, setUserRole] = useState(0);
const [email, setEmail] =useState('')
const [UserId, setUserId] = useState(0)

useEffect(() => {
  axios.get('/checkAuth', { withCredentials: true})
  .then(resp => {
    console.log(resp)
    if(resp.data.id) {
      setIsloggedIn(true)
      setUserRole(resp.data.role)
      setEmail(resp.data.email)
      setUserId(resp.data.id)
    }
  })
}, [])

const handleLoginState = (loggedIn, role) => {
  setIsloggedIn(loggedIn)
  setUserRole(role)
}

  return (
    <div className="App">
      <Router>
        <Header loggedIn={isLoggedIn} userRole={userRole} setLogin={setIsloggedIn} email={email}/>
        <Routes>
        {!isLoggedIn && (<Route path="/registration" element={<Registration />} />)}
          {!isLoggedIn && (<Route path="/login" element={<Login state={handleLoginState} />} />)}
          {userRole === 1 && (<Route path="/admin" element={<AdminArea />} /> )}
          <Route path="/" element={<Homepage isLoggedIn={isLoggedIn} />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/createCrowdFounding" element={<CrowdFundCreate />} />
          <Route path="/fundraisers" element={<CFlist />} />
          <Route path="/mycrowdfunders" element={<MyFundraisers UserId={UserId}/>} />
          <Route path="/mycrowdfunder/:id" element={<CrowdFundEdit />} />
        </Routes>
      </Router>
    </div>
  );
};
