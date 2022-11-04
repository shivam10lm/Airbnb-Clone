import React, { useState, useEffect } from "react";

import { Stack, Box, Typography } from "@mui/material";
import axios from "axios";
import MainCard from "./MainCard";

const Cards = () => {
  //const [index, setIndex] = useState(0);
  const [title, setTitle] = useState([]);

  //const handleSelect = (selectedIndex, e) => {
  // setIndex(selectedIndex);
  //};
  useEffect(() => {
    axios
      .get(
        "https://pixabay.com/api/?key=30699323-ddbfd2b26472789bfe2202fa2&q=yellow+flowers&image_type=photo&pretty=true"
      )
      .then((res) => setTitle(res.data.hits));
  }, []);

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        mx: "20px"
      }}
    >
      {title.map((s) => {
        return (
          <MainCard>
            <Typography sx={{ mx: "60px", mt: "20px" }}>{s.user}</Typography>
          </MainCard>
        );
      })}
    </Stack>
  );
};

export default Cards;
