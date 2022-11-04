import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [place, setPlace] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`searchDestination?query&q=${searchTerm}`).then((data) =>
      setPlace(data.data.id)
    );
  }, [searchTerm]);

  return (
    <Box>
      <Typography variant="h4" fontWeight={600} color="black" mb={3}>
        Homes
      </Typography>
      <Box display="flex">
        <Box>{place}</Box>
      </Box>
    </Box>
  );
};

export default SearchFeed;
