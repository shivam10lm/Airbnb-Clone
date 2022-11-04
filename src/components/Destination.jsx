import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

const Destination = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const navigate = useNavigate;

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/searchDestination/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        bgcolor: "#EBEBEB",
        boxShadow: "none",
        height: "55px",
        width: "95%",
        borderTopLeftRadius: "50px",
        borderBottomLeftRadius: "50px"
      }}
    >
      <input
        className="search-bar"
        placeholder="Search Destinations"
        style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
        value={searchTerm}
        height="170px"
        outline="none"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Paper>
  );
};

export default Destination;
