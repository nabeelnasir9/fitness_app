import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography
        color="orange"
        fontSize="2rem"
        fontWeight="600"
        fontFamily="Montserrat, sans-serif"
      >
        Fitness Club
      </Typography>
      <Typography
        color="black"
        fontSize="3rem"
        fontWeight="600"
        fontFamily="Montserrat, sans-serif"
      >
        Sweat, Smile
      </Typography>
      <Typography
        color="black"
        fontSize="3rem"
        fontWeight="600"
        fontFamily="Montserrat, sans-serif"
      >
        And Repeat
      </Typography>
      <Typography
        color="black"
        fontSize="0.8rem"
        fontWeight="600"
        fontFamily="Poppins, sans-serif"
        marginTop="1.5rem"
      >
        Check out the most effective exercises prescision
      </Typography>

      <Button
        href="/exercise/:id"
        variant="contained"
        sx={{
          mt: { lg: "3rem", xs: "1.5rem" },
          backgroundColor: "#fe914ae8",
          border: "2px solid #fe914ae8",
          fontWeight: "600",
          "&:hover": {
            backgroundColor: "white",
            color: "#fe914ae8",
          },
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight="600"
        color="#fe914ae8"
        sx={{
          opacity: "0.3",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>
      <img src={HeroImage} alt="HeroImage" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
