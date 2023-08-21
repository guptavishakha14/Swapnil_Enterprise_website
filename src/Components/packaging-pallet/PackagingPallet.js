import React, { Fragment, useState } from "react";
import "./PackagingPallet.css";
import Footer from "../footer/Footer";
import CatalogueNavbar from "../catalogue-navbar/CatalogueNavbar";
import products from "../../packagingPallet.json";

const PackagingPallet = () => {
  const [currentImages, setCurrentImages] = useState(
    products.map((product) => product["image-url"])
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageHover = (imageUrl, index) => {
    setCurrentImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = imageUrl;
      return updatedImages;
    });
    setActiveIndex(index);
  };

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const handleProductClick = (index) => {
    setActiveIndex(index);
    const element = document.getElementById(`product-${index}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <Fragment>
      <CatalogueNavbar />
      <div className="product-details-container">
        <div className="product-pallet-container">
          {products.map((product, index) => (
            <a
              key={product["prod-name"]}
              href={`#product-${index}`}
              className={`product-name ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleProductClick(index)}
            >
              {product["prod-name"]}
            </a>
          ))}
        </div>

        {products.map((product, index) => (
          <div
            key={product["image-url"]}
            className="product"
            id={`product-${index}`}
          >
            <div className="product-images">
              {product["more-images"] && (
                <div className="more-images">
                  {Object.entries(product["more-images"]).map(
                    ([key, value]) => (
                      <img
                        key={key}
                        src={value}
                        alt={`More Image ${key}`}
                        className={`more-image ${
                          activeIndex === index ? "active" : ""
                        }`}
                        onMouseEnter={() => handleImageHover(value, index)}
                        onMouseLeave={() =>
                          handleImageHover(currentImages[index], index)
                        }
                        onClick={() => handleImageClick(index)}
                      />
                    )
                  )}
                </div>
              )}
              <img
                src={currentImages[index]}
                alt="Product"
                id="product-image"
              />
            </div>
            <div className="div-prod-details">
              <h2>{product["prod-name"]}</h2>
              <p className="prod-price">
                <span>
                  <b> Rs 1.099 </b>
                </span>{" "}
                / Piece
              </p>
              <p>
                Minimum order quantity:{" "}
                <span>
                  <b> 50 Piece</b>
                </span>
              </p>
              <table className="product-table">
                <tbody>
                  {Object.entries(product).map(([attribute, value]) => {
                    if (
                      attribute === "image-url" ||
                      attribute === "prod-name" ||
                      attribute === "more-images"
                    )
                      return null;
                    return (
                      <tr key={attribute}>
                        <td className="attribute-cell">{attribute}</td>
                        <td className="value-cell">{value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button className="custom-button" onClick={handleButtonClick}>
                Yes, I am interested!
              </button>
            </div>
          </div>
        ))}
        <div style={{ marginBottom: "70px" }}></div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default PackagingPallet;
