import React, { useEffect, useState } from "react";
import { Stack, Box, IconButton, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import axios from "axios";
const SlideBar = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);

  /*useEffect(() => {

    fetchFromAPI(`getCategory`).then((res) =>
      setSelectedCategory([...res.data])
    );
  }, []);*/

  useEffect(() => {
    axios
      .get(
        "https://pixabay.com/api/?key=30699323-ddbfd2b26472789bfe2202fa2&q=yellow+flowers&image_type=photo&pretty=true"
      )
      .then((res) => setSelectedCategory(res.data.hits));
  }, []);

  return (
    <Stack
      direction="row"
      sx={{ overflow: "hidden", height: "90%", background: "white", mx: 3 }}
    >
      {selectedCategory.map((el) => {
        return (
          <Box direction="row">
            <IconButton sx={{ display: "flex", flexDirection: "column" }}>
              <img src={el.largeImageURL} height="24px" width="24px" alt="rr" />
              <Typography sx={{ fontSize: "12px" }}>{el.user}</Typography>
            </IconButton>
          </Box>
        );
      })}
    </Stack>
  );
};

export default SlideBar;
