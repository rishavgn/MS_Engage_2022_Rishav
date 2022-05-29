// import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext  } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import logo_for from '.././logo_for.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container_nav">
        <div className="left">
          <img
            src={logo_for}
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          {/* <Link to="/bookmark" className="link">
            <span>Your Fav</span>
          </Link> */}

         
          <Link to="/recms" className="link">
            <span className="navbarmainLinks">Move to Recommendation</span>
          </Link>
          <Link to="/list" className="link">
            <span className="navbarmainLinks">About Author</span>
          </Link>
         
        </div>
        <div className="right">
          {/* <Search className="icon" /> */}
          <span>Hi{AuthContext.Provider.user}</span>
          {/* <Notifications className="icon" /> */}
          
          <div className="profile">
          <span style={{fontSize:"50px"}} class="material-symbols-outlined">settings</span>
            <div className="options">
              
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;