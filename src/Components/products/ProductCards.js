import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import products from "../../productCards.json";

const ProductCards = () => {
  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          marginTop: "50px",
          color: "#603601",
          fontWeight: "bold",
          textShadow: "1px 1px 1px black",
        }}
      >
        OUR PRODUCTS
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
          marginTop: "30px",
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              backgroundColor: "white",
              maxWidth: 300,
              margin: "16px",
              borderRadius: "20px",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.8)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "30px",
              "&:hover": {
                boxShadow: "6px 6px 10px rgba(16, 2, 31, 0.5)",
                transform: "scale(1.01)",
              },
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                height: 300,
                objectFit: "cover",
                display: "block",
                margin: "auto",
              }}
            />
            <CardContent style={{ flex: "1 0 auto" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "#603601",
                  textShadow: "0.5px 0.5px 0.5px black",
                }}
              >
                {product.name}
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: 15,
                  marginBottom: "8px",
                  color: "#603601",
                }}
              >
                {product.description}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              sx={{
                marginTop: "8px",
                height: "50px",
                width: "150px",
                backgroundColor: "#603601",
                color: "#FCF8E8",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#B5651D",
                },
                marginBottom: "16px",
              }}
            >
              View Details
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default ProductCards;
