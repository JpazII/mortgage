import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import NavBar from './Components/NavBar'
import NoMatch from './Components/NoMatch'

import Login from "./Components/Login"
import Register from "./Components/Register"
import Home from "./Components/Home"
import Calculate from "./Components/Calculate"
import Closedend from "./Components/Closedend"
import Creditcard from "./Components/Creditcard"
import DepositAmount from "./Components/DepositAmount"
import MortgageCalc from "./Components/Mortgage/Mortgage"


import Footer from "./Footer"
import Userdetails from "./Components/Userdetails"

const App = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
    <NavBar />
      <Routes>
        <Route exact path="/" element={isLoggedIn==="true" ? <Userdetails /> : <Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Calculate" element={<Calculate />} />
        <Route path="/ClosedEnd" element={<Closedend />} />
        <Route path="/DepositAccount" element={<DepositAmount />} />
        <Route path="/CreditCard" element={<Creditcard />} />
        <Route path="/Mortgage" element={<MortgageCalc />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Userdetails" element={<Userdetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
  <Footer />
    </>
  );
}

export default App;