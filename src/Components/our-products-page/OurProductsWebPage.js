import React from "react";
import "./OurProductsWebPage.css";
import Footer from "../footer/Footer";
import { Typography } from "@mui/material";
import productsData from "../../ourProducts.json";

const ourProductsPage = () => {
  const { palletProducts, crateProducts, boxProducts } = productsData;
  return (
    <div className="ourProduct-container">
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
        OUR PRODUCTS
      </Typography>

      <div className="products-sub-container1">
        <h2 className="header">PACKAGING PALLET</h2>
        <p>
          We are a leading Manufacturer of Polished Wooden Pallet, Square Two
          Way Wooden Pallet, Rectangular Four Way Wooden Pallete, Brown
          Rectangular Plywood Pallet and Square Brown Wooden Pallet from
          Aurangabad, India.
        </p>
        <div className="packaging-pallet-products1">
          <div>
            {palletProducts.map((product) => (
              <div className="card1">
                <img src={product.key} />
                <div className="card-body1">
                  <h2>{product.value}</h2>
                  <p>
                    We are a leading Manufacturer of Polished Wooden Pallete
                  </p>
                  <button className="btn-buy-now">VIEW DETAILS</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="products-sub-container1">
        <h2 style={{ marginTop: "60px", marginLeft: "10px" }}>
          PACKAGING CRATE
        </h2>
        <p>
          Manufacturer of a wide range of products which include Brown Polished
          Wooden Crate, Rectangular Wooden Flat Crate, Square Wooden Packaging
          Crate and Wooden Brown Rectangular Crate.
        </p>

        <div className="packaging-pallet-products1">
          <div>
            {crateProducts.map((product) => (
              <div className="card1">
                <img src={product.key} />
                <div className="card-body1">
                  <h2>{product.value}</h2>
                  <p>
                    We are a leading Manufacturer of Polished Wooden Pallete
                  </p>
                  <button className="btn-buy-now">VIEW DETAILS</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="products-sub-container1">
        <h2 style={{ marginTop: "60px", marginLeft: "10px" }}>PACKAGING BOX</h2>
        <p>
          Manufacturer of a wide range of products which include Rectangular
          Industrial Packaging Wooden Box, Wooden Brown Rectangular Box, Cubical
          Wooden Packaging Box, Square Wooden Packing Box and Rectangular Wooden
          Packaging Box.
        </p>

        <div className="packaging-pallet-products1">
          <div>
            {boxProducts.map((product) => (
              <div className="card1">
                <img src={product.key} />
                <div className="card-body1">
                  <h2>{product.value}</h2>
                  <p>
                    We are a leading Manufacturer of Polished Wooden Pallete
                  </p>
                  <button className="btn-buy-now">VIEW DETAILS</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "70px" }}></div>
      <Footer />
    </div>
  );
};

export default ourProductsPage;
