import React from 'react'
import Home from './components/home/Home'
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import Recommendation from './components/recommendations/Recommendation';
import List from './components/list/List';
// import Bookmark from './components/bookmark/Bookmark';



export default function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/"
          element ={user ? <Home /> : <Navigate to="/register" />} />
        
       <Route path='/recms' element={<Recommendation/>} />
       <Route path='/list' element={<List/>} />
       {/* <Route path='/bookmark' element={<Bookmark />} /> */}
        <Route  path="/register"
         element= {!user ? <Register /> : <Navigate to="/" />} />
        
        <Route path="/login"
          element={!user ? <Login /> : <Navigate to="/" />} />
       
      </Routes>
    </Router>
  )
}