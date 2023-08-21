import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const styles = {
  navbar: {
    width: "100%",
    height: "90px",
    backgroundSize: "cover",
    backgroundColor: "#603601",
    boxShadow: "1px 1px 4px #FFF8DC",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "5",
    lineHeight: "5.5",
  },

  title: {
    flexGrow: 1,
    fontSize: "2rem",
    color: "#FCF8E8",
    fontFamily: "Lato, sans-serif",
    // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },

  button: {
    border: "none",
    color: "#FCF8E8",
    fontSize: "1.1rem",
    fontWeight: "bold",
    letterSpacing: "0.02em",
    marginLeft: "1.5rem",
    textTransform: "uppercase",
    // boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
    position: "relative",
    textDecoration: "none",
    transition: "border 0.1s ease",
    // borderBottom: "2px solid #FCF8E8",
  },
  buttonHover: {
    backgroundColor: "#FCF8E8",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)",
    color: "#603601",
  },
  activeButton: {
    backgroundColor: "#FCF8E8",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)",
    color: "#603601",
  },
  drawer: {
    width: 250,
  },
};

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [hoveredButton, setHoveredButton] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const handleButtonHover = (buttonName) => {
    setHoveredButton(buttonName);
  };

  return (
    <AppBar position="static" style={styles.navbar}>
      <Toolbar>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <List style={styles.drawer}>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/our-products">
              <ListItemText primary="Our Products" />
            </ListItem>
            <ListItem button component={Link} to="/catalogue">
              <ListItemText primary="Catalogue" />
            </ListItem>
            <ListItem button component={Link} to="/about-us">
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Drawer>
        <img
          className="nav-logo"
          style={{
            borderRadius: "5px",
            width: "50px",
            height: "40px",
            marginRight: "20px",
            marginLeft: "10px",
          }}
          src="https://5.imimg.com/data5/SELLER/Logo/2023/5/306635128/JX/KT/XO/15788247/123-120x120.jpeg"
        />
        <Typography variant="h6" component="div" style={styles.title}>
          Swapnil Enterprises
        </Typography>
        <span className="nav-menu-list">
          <Link to="/">
            <Button
              color="inherit"
              style={
                hoveredButton === "home" || activeButton === "home"
                  ? { ...styles.button, ...styles.buttonHover }
                  : styles.button
              }
              onMouseEnter={() => handleButtonHover("home")}
              onMouseLeave={() => handleButtonHover("")}
              onClick={() => setActiveButton("home")}
            >
              Home
            </Button>
          </Link>
          <Link to="/our-products">
            <Button
              color="inherit"
              style={
                hoveredButton === "products" || activeButton === "products"
                  ? { ...styles.button, ...styles.buttonHover }
                  : styles.button
              }
              onMouseEnter={() => handleButtonHover("products")}
              onMouseLeave={() => handleButtonHover("")}
              onClick={() => setActiveButton("products")}
            >
              Our Products
            </Button>
          </Link>
          <Link to="/catalogue">
            <Button
              color="inherit"
              style={
                hoveredButton === "catalogue" || activeButton === "catalogue"
                  ? { ...styles.button, ...styles.buttonHover }
                  : styles.button
              }
              onMouseEnter={() => handleButtonHover("catalogue")}
              onMouseLeave={() => handleButtonHover("")}
              onClick={() => setActiveButton("catalogue")}
            >
              Catalogue
            </Button>
          </Link>
          <Link to="/about-us">
            <Button
              color="inherit"
              style={
                hoveredButton === "about" || activeButton === "about"
                  ? { ...styles.button, ...styles.buttonHover }
                  : styles.button
              }
              onMouseEnter={() => handleButtonHover("about")}
              onMouseLeave={() => handleButtonHover("")}
              onClick={() => setActiveButton("about")}
            >
              About Us
            </Button>
          </Link>
          <Link to="/contact-us">
            <Button
              color="inherit"
              style={
                hoveredButton === "contact" || activeButton === "contact"
                  ? { ...styles.button, ...styles.buttonHover }
                  : styles.button
              }
              onMouseEnter={() => handleButtonHover("contact")}
              onMouseLeave={() => handleButtonHover("")}
              onClick={() => setActiveButton("contact")}
            >
              Contact Us
            </Button>
          </Link>
        </span>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
