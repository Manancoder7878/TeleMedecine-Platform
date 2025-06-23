import { useCallback } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import { Children } from "react";
const FrameComponent = () => {
  const {user , loginWithRedirect,isAuthenticated,logout} = useAuth0();
  console.log(user);
  return (
    <nav className={`navbar `} id="Nav_bar" mynav="bar">
      <div className="logo-parent">
        <button className="logo">
          <div className="ellipse-parent">
            <div className="group-child" />
            <div className="rectangle-parent">
              <div className="group-item" />
              <div className="group-inner" />
            </div>
          </div>
          <b className="medifine">Medifine</b>
        </button>
        <div className="menu-items">
          <button className="home-wrapper" >
            <b className="home">Home</b>
          </button>
          <button className="menu-items-inner">
            <div className="about-us-wrapper">
              <div className="about-us">About us</div>
            </div>
          </button>
          <button className="menu-items-child">
            <div className="our-services-wrapper">
              <div className="about-us">Our services</div>
            </div>
          </button>
          {
          isAuthenticated && 
          <button className="menu-items-child">
          <div className="our-services-wrapper">
              <div className="about-us">Hello,{user.name}</div>
            </div>
          </button>
          }
          {
            isAuthenticated ? 
            <button className="frame-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            <div className="our-services-wrapper">
              <div className="contact-us">Logout</div>
            </div>
          </button>
          :<button className="frame-button" onClick = {() => loginWithRedirect()}>
            <div className="our-services-wrapper">
              <div className="contact-us">Login</div>
            </div>
          </button>
          }
        </div>
      </div>
    </nav>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
