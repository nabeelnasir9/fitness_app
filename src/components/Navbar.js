import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import LogoNav from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      gap="70px"
      justifyContent="space-around"
      alignItems="center"
      px="20px"
      sx={{
        gap: { sm: "122px", xs: "70px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
        backgroundColor: "white",
      }}
    >
      <Link to="/">
        <img
          src={LogoNav}
          alt=""
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "red",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
            borderBottom: "2px solid orange",
          }}
        >
          Home
        </Link>
        <a
          href="/exercise/:id"
          style={{
            textDecoration: "none",
            color: "red",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
            borderBottom: "2px solid orange",          
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
