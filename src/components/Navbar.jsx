import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { Searchbar, User, MainDate } from "./";
import SearchModal from "../modal/SearchModal";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        postion: "sticky",
        background: "#fff",
        top: 0,
        justifyContent: "space-between",
        borderBottom: "1px solid #DFDFDF"
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchModal />
      <User />
    </Stack>
  );
};

export default Navbar;
