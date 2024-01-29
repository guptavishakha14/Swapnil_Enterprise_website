import React from "react";
import "./HomeWebPage.css";
import ImageCarousel from "../image-carousel/ImageCarouselSlider";
import ProductCards from "../products/ProductCards";
import Footer from "../footer/Footer";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const homePage = () => {
  return (
    <div className="homepage-container">
      <div className="div-home-img">
        <h2>SWAPNIL ENTERPRISES</h2>
        <p>
          Leading Manufacturer and Wholesaler of a wide range of Packaging
          Crate, Packaging Box, Packaging Pallet
        </p>
        <Link to="/contact-us">
          <Button
            variant="contained"
            sx={{
              marginTop: "2%",
              marginLeft: "45%",
              height: "50px",
              width: "150px",
              backgroundColor: "#FCF8E8",
              color: "#603601",
              fontWeight: "bold",
              fontSize: "15px",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#D7A86E",
              },
            }}
          >
            CONTACT US
          </Button>
        </Link>
      </div>
      <ImageCarousel />
      <ProductCards />
      <Footer />
    </div>
  );
};

export default homePage;
