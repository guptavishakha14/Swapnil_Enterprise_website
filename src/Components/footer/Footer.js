import React, { useState } from "react";
import { Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [country, setCountry] = useState("");
  const [requirement, setRequirement] = useState("");

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleCountryChange = (country) => {
    setCountry(country);
  };

  const handleRequirementChange = (event) => {
    setRequirement(event.target.value);
  };

  const handleButtonClick = () => {
    window.open(getDirectionsURL(), "_blank");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Mobile Number:", mobileNumber);
    console.log("Country:", country);
    console.log("Requirement:", requirement);
  };

  const getDirectionsURL = () => {
    const address =
      "Plot No 16/17 Industrial Area, SR No 28, Rajendra Nagar, Chikalthana, Aurangabad-431006, Maharashtra, India";
    const encodedAddress = encodeURIComponent(address);
    return `https://maps.google.com/?q=${encodedAddress}`;
  };

  return (
    <footer style={{ backgroundColor: "#603601" }}>
      <div className="companySection">
        <h1>COMPANY</h1>
        <h4 style={{ color: "#FCF8E8", marginBottom: "20px" }}>
          ______________________
        </h4>
        <Link to="/" className="pagelink">
          <p>HOME</p>
        </Link>
        <Link to="/our-products" className="pagelink">
          <p>OUR PRODUCTS</p>
        </Link>
        <Link to="/catalogue" className="pagelink">
          <p>CATALOGUE</p>
        </Link>
        <Link to="/about-us" className="pagelink">
          <p>ABOUT US</p>
        </Link>
        <Link to="/contact-us" className="pagelink">
          <p>CONTACT US</p>
        </Link>
      </div>

      <div className="reachUsHeading">
        <h1>REACH US</h1>
        <h4
          style={{ color: "#FCF8E8", marginBottom: "20px", marginTop: "-3px" }}
        >
          ____________________________________
        </h4>
        <div style={{ display: "flex" }}>
          <LocationOnIcon
            style={{ fontSize: "25px", color: "#FCF8E8", marginTop: "4px" }}
          />
          <div>
            <h2 style={{ display: "inline" }}>SWAPNIL ENTERPRISES</h2>
            <p>
              Plot No 16/17 Industrial Area, SR No 28, Rajendra Nagar,
              Chikalthana, Aurangabad-431006, Maharashtra, India
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <AccountCircleIcon
            style={{ fontSize: "25px", color: "#FCF8E8", marginTop: "4px" }}
          />
          <p style={{ display: "inline" }}>Swapnil Mundaware (Owner)</p>
          <br />
        </div>
        <div style={{ display: "flex" }}>
          <CallIcon
            style={{
              fontSize: "25px",
              color: "#FCF8E8",
              display: "inline",
              marginTop: "4px",
            }}
          />
          <p>0794282725</p>
        </div>
        <br></br>
        <div className="reachUsItem">
          <Button variant="contained" onClick={handleButtonClick}>
            Get Directions
          </Button>
        </div>
      </div>

      <div className="updateSection">
        <div className="subscribe">
          <p>Get the latest News, Events & more...</p>
          <input
            type="text"
            id="myTextBox"
            name="myTextBox"
            placeholder="Email Address* "
          />
          <Button
            style={{ marginTop: "20px", marginLeft: "-198px" }}
            variant="contained"
          >
            SUBSCRIBE
          </Button>
        </div>
        <div className="share">Share this Website</div>
        <div className="icons">
          <FacebookIcon
            style={{ fontSize: "35px", color: "#FCF8E8", marginTop: "4px" }}
          ></FacebookIcon>
          <span style={{ margin: "0 8px" }}></span>
          <LinkedInIcon
            style={{ fontSize: "35px", color: "#FCF8E8", marginTop: "4px" }}
          ></LinkedInIcon>
          <span style={{ margin: "0 8px" }}></span>
          <InstagramIcon
            style={{ fontSize: "35px", color: "#FCF8E8", marginTop: "4px" }}
          ></InstagramIcon>
          <span style={{ margin: "0 8px" }}></span>
          <TwitterIcon
            style={{ fontSize: "35px", color: "#FCF8E8", marginTop: "4px" }}
          ></TwitterIcon>
          <span style={{ margin: "0 8px" }}></span>
          <YouTubeIcon
            style={{ fontSize: "35px", color: "#FCF8E8", marginTop: "4px" }}
          ></YouTubeIcon>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
