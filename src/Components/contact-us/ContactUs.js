import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import Footer from "../footer/Footer";
import PhoneInput from "react-phone-number-input";
import "./ContactUs.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  inputRoot: {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#603601",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#603601",
    },
  },
});

export default function ContactForm() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requirementDetails, setRequirementDetails] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ backgroundColor: "#fcf8e8" }}>
      <Box
        sx={{
          // backgroundColor: "#fcf8e8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          marginTop: "3%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "600px",
            mx: "auto",
            p: 4,
            // border: "2px solid #603601",
            borderRadius: "20px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
            backgroundColor: "white",
            marginTop: "130px",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            mb={2}
            sx={{
              marginTop: "1px",
              color: "#603601",
              fontWeight: "bold",
              textShadow: "1px 1px 1px black",
              marginBottom: "20px",
            }}
          >
            CONTACT US
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              className={classes.inputRoot}
              required
            />
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              className={classes.inputRoot}
              required
              type="email"
            />
            <PhoneInput
              fullWidth
              placeholder="Phone Number *"
              defaultCountry="IN"
              value={phoneNumber}
              onChange={setPhoneNumber}
              required
            />
            <TextField
              fullWidth
              label="Requirement Details"
              value={requirementDetails}
              onChange={(e) => setRequirementDetails(e.target.value)}
              margin="normal"
              className={classes.inputRoot}
              required
              multiline
              rows={4}
            />
            <Button
              fullWidth
              type="submit"
              sx={{
                mt: 2,
                backgroundColor: "#603601",
                color: "#fcf8e8",
                width: "25%",
                marginLeft: "170px",
                "&:hover": {
                  backgroundColor: "#D7A86E",
                },
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
      <div style={{ marginBottom: "80px" }}></div>
      <Footer />
    </div>
  );
}
