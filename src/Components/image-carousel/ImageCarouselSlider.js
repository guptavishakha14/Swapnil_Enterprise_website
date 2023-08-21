import React, { useRef } from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import "./ImageCarouselSlider.css";
import products from "../../imageCarousel.json";

const ImageCarousel = () => {
  const boxRef = useRef(null);

  const btnpressprev = () => {
    const box = boxRef.current;
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
      console.log(width);
    }
  };

  const btnpressnext = () => {
    const box = boxRef.current;
    if (box) {
      const width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
      console.log(width);
    }
  };

  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          marginTop: "70px",
          color: "#603601",
          fontWeight: "bold",
          textShadow: "1px 1px 1px black",
        }}
      >
        FEATURED PRODUCTS
      </Typography>

      <div className="product-carousel">
        <button className="pre-btn" onClick={btnpressprev}>
          <ExpandCircleDownIcon
            className="fa-solid fa-arrow"
            style={{ color: "#603601", rotate: "90Deg", fontSize: "40px" }}
          ></ExpandCircleDownIcon>
        </button>

        <div className="div-products-slider" ref={boxRef}>
          {products.map((product) => (
            <div key={product.id} className="home-card">
              <img src={product.image} alt="Product Image" />
              <div className="home-card-body">
                <h2>{product.name}</h2>
                <button className="btn-buy-now">VIEW DETAILS</button>
              </div>
            </div>
          ))}
        </div>
        <button className="next-btn" onClick={btnpressnext}>
          <ExpandCircleDownIcon
            className="fa-solid fa-arrow"
            style={{ color: "#603601", rotate: "-90Deg", fontSize: "40px" }}
          ></ExpandCircleDownIcon>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
