import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  appBar: {
    width: "100%",
    backgroundSize: "cover",
    boxShadow: "1px 1px 4px #FFF8DC",
    position: "fixed",
    left: "0",
    zIndex: "3",
    lineHeight: "4",
    backgroundColor: "#865439",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    padding: "5px",
  },
  button: {
    border: "none",
    color: "#FCF8E8",
    fontSize: "1.1rem",
    fontWeight: "bold",
    letterSpacing: "0.02em",
    marginLeft: "2rem",
    textTransform: "uppercase",
    backgroundColor: "#865439",
    position: "relative",
    textDecoration: "none",
    transition: "border 0.1s ease",
    textShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)",
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

export default function CatalogueNavbar() {
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
    <AppBar position="static" style={styles.appBar}>
      <Toolbar>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <List style={styles.drawer}>
            <ListItem button component={Link} to="/packaging-pallet">
              <ListItemText primary="Package Pallet" />
            </ListItem>
            <ListItem button component={Link} to="/packaging-crate">
              <ListItemText primary="Package Crate" />
            </ListItem>
            <ListItem button component={Link} to="/packaging-box">
              <ListItemText primary="Package Box" />
            </ListItem>
          </List>
        </Drawer>
        <span className="nav-menu-list">
          <Link to="/packaging-pallet">
            <Button
              color="inherit"
              style={
                hoveredButton === "pallet" || activeButton === "pallet"
                  ? { ...styles.button, ...styles.buttonHover }
                  : styles.button
              }
              onMouseEnter={() => handleButtonHover("pallet")}
              onMouseLeave={() => handleButtonHover("")}
              onClick={() => setActiveButton("pallet")}
            >
              Package Pallet
            </Button>
          </Link>
          <Link to="/packaging-crate">
            <Button
              color="inherit"
              style={
                hoveredButton === "crate" || activeButton === "crate"
                  ? { ...styles.button, ...styles.buttonHover }
                  : styles.button
              }
              onMouseEnter={() => handleButtonHover("crate")}
              onMouseLeave={() => handleButtonHover("")}
              onClick={() => setActiveButton("crate")}
            >
              Package Crate
            </Button>
          </Link>
          <Link to="/packaging-box">
            <Button
              color="inherit"
              style={
                hoveredButton === "box" || activeButton === "box"
                  ? { ...styles.button, ...styles.buttonHover }
                  : styles.button
              }
              onMouseEnter={() => handleButtonHover("box")}
              onMouseLeave={() => handleButtonHover("")}
              onClick={() => setActiveButton("box")}
            >
              Package Box
            </Button>
          </Link>
        </span>
      </Toolbar>
    </AppBar>
  );
}
