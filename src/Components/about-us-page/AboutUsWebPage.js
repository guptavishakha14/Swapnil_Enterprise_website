import React, { useState, useEffect } from "react";
import "./AboutUsWebPage.css";
import Footer from "../footer/Footer";
import { Typography } from "@mui/material";
import images from "../../aboutUs.json";

const AboutUsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the time interval (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="about-us-page-container">
      <div className="our-products-con">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: "center",
            marginTop: "50px",
            color: "#603601",
            fontWeight: "bold",
            textShadow: "1px 1px 1px black",
            marginBottom: "30px",
          }}
        >
          OUR PRODUCTS
        </Typography>

        <div className="our-products-div">
          <div className="card">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/4/303436159/CW/FC/FL/15788247/polished-wooden-pallete-250x250.jpeg"
              alt="Packaging Pallet"
            />
            <h4
              style={{ fontSize: "18px", fontWeight: "bold", marginTop: "5px" }}
            >
              PACKAGING PALLET
            </h4>
            <p style={{ marginTop: "10px" }}>
              <mark
                style={{
                  backgroundColor: "#603601",
                  color: "#fcf8e8",
                  padding: "4px",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                  marginTop: "10px",
                  borderRadius: "5px",
                  fontWeight: "400",
                }}
              >
                11 products available
              </mark>
            </p>
          </div>
          <div className="card">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/4/303437757/JJ/CG/HK/15788247/a-2--250x250.jpeg"
              alt="Packaging Crate"
            />
            <h4
              style={{ fontSize: "18px", fontWeight: "bold", marginTop: "5px" }}
            >
              PACKAGING CRATE
            </h4>
            <p style={{ marginTop: "10px" }}>
              {" "}
              <mark
                style={{
                  backgroundColor: "#603601",
                  color: "#fcf8e8",
                  padding: "4px",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                  marginTop: "10px",
                  borderRadius: "5px",
                  fontWeight: "400",
                }}
              >
                4 products available
              </mark>
            </p>
          </div>
          <div className="card">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/4/303439173/IF/JL/OL/15788247/rectangular-industrial-packaging-wooden-box-250x250.jpg"
              alt="Packaging Box"
            />
            <h4
              style={{ fontSize: "18px", fontWeight: "bold", marginTop: "5px" }}
            >
              PACKAGING BOX
            </h4>
            <p style={{ marginTop: "10px" }}>
              <mark
                style={{
                  backgroundColor: "#603601",
                  color: "#fcf8e8",
                  padding: "4px",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                  marginTop: "10px",
                  borderRadius: "5px",
                  fontWeight: "400",
                }}
              >
                5 products available
              </mark>
            </p>
          </div>
        </div>
      </div>

      <div className="div-swapnil-enterprises">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: "center",
            marginTop: "-20px",
            color: "#603601",
            fontWeight: "bold",
            textShadow: "1px 1px 1px black",
            marginBottom: "30px",
          }}
        >
          SWAPNIL ENTERPRISES
        </Typography>
        <p>
          Established as a <strong>Proprietor firm</strong> in the year{" "}
          <strong>2012</strong>, we
          <strong>“Swapnil Enterprises”</strong> are a leading{" "}
          <strong>Manufacturer and Wholesaler</strong> of a wide range of{" "}
          <strong>Packaging Crate, Packaging Box, Packaging Pallet.</strong>
        </p>
      </div>
      <div className="div-company-album">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: "center",
            marginTop: "-30px",
            color: "#603601",
            fontWeight: "bold",
            textShadow: "1px 1px 1px black",
            marginBottom: "40px",
          }}
        >
          COMPANY ALBUM
        </Typography>

        <div className="div-company-images">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img
                src={image.imageUrl}
                alt={image.name}
                style={{ display: index === currentIndex ? "block" : "none" }}
              />
              {index === currentIndex && <p>{image.name}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="div-factsheet">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: "center",
            marginTop: "-30px",
            color: "#603601",
            fontWeight: "bold",
            textShadow: "1px 1px 1px black",
            marginBottom: "40px",
          }}
        >
          FACTSHEET
        </Typography>
        <table>
          <tbody>
            <tr>
              <p>BASIC INFORMATION</p>
            </tr>
            <tr>
              <th>Nature of Business</th>
              <th>Manufacturer</th>
            </tr>
            <tr>
              <th>Additional Business</th>
              <th>Wholesaler</th>
            </tr>
            <tr>
              <th>Company CEO</th>
              <th>Sheshrao Bansi Mundaware</th>
            </tr>
            <tr>
              <th>Total Number of Employees</th>
              <th>Upto 10 People</th>
            </tr>
            <tr>
              <th>Year of Establishment</th>
              <th>2012</th>
            </tr>
            <tr>
              <th>Legal Status of Firm</th>
              <th>Individual - Proprietor</th>
            </tr>
            <tr>
              <th>Annual Turnover</th>
              <th>Upto Rs. 50 Lakh</th>
            </tr>

            <tr>
              <p>STATUTORY PROFILE</p>
            </tr>
            <tr>
              <th>Banker</th>
              <th>Bank of Baroda</th>
            </tr>
            <tr>
              <th>GST No. </th>
              <th>27ARVPM9397G1ZP</th>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
