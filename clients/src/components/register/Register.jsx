import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";
import logo_for from '.././logo_for.png'


export default function Register() {
  // const [email, setEmail] = useState("");

  const[user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    age:""
  })

  function handlechange(event) {
    const {name, value} = event.target
    setUser(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
}

  let navigate = useNavigate();

  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const nameRef = useRef();
  // const ageRef = useRef();

  // const handleStart = () => {
  //   setEmail(emailRef.current.value);
  // };

  const handleFinish = async (e) => {
    const {email, name, password, age} = user;
      e.preventDefault();
    console.log(email);
    console.log(name);
    try {
      await axios.post("/api/v1/register", { email,name, password, age });
      navigate("/");
    } catch (err) {
      console.log(err)
      alert(err.response.data.message)
    }
  };
   
 
  
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={logo_for}
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
          <a className="loginButton" href="/login">Already a member</a>
       
          <div style={{borderRadius:"40px"}}  className="input">
            <input style={{borderRadius:"40px"}} type="email" placeholder="email address" name="email"  value={user.email} onChange={handlechange} />
            {/* <button className="registerButton" onClick={handleStart}>
              Get Started
            </button> */}
           
          </div>
   
          <form className="input">
            <input type="name" placeholder="name" name="name"  value={user.name} onChange={handlechange} />
            <input type="password" placeholder="password" name="password" value={user.password} onChange={handlechange} />
            <input type="age" placeholder="age"  name='age' value={user.age}  onChange={handlechange}/>
            <button className="registerButton2" onClick={handleFinish}>
              Start
            </button>
          </form>
       
      </div>
    </div>
  );
}