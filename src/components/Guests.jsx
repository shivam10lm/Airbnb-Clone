import { useState } from "react";
import { Stack, Box, Typography, Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Guests = () => {
  const [add, setAdd] = useState(0);

  const incr = () => {
    setAdd(add + 1);
  };
  const decr = () => {
    if (add === 0) {
      setAdd(add);
    } else {
      setAdd(add - 1);
    }
  };
  return (
    <Stack direction="row">
      <Box sx={{ ml: 0.1 }}>
        <Box
          sx={{
            pl: 5,
            textAlign: "center",
            bgcolor: "background.paper",
            borderRadius: "50px",
            width: "200px",
            height: "55px",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            textTransform: "capitalize",
            color: "#666666",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Guests{" "}
          <Button
            className="plus-button"
            onClick={decr}
            disableRipple={true}
            sx={{ color: "black" }}
          >
            <RemoveCircleOutlineIcon sx={{ color: "#CFD2CF" }} />
          </Button>
          <Typography>{add}</Typography>
          <Button
            className="plus-button"
            onClick={incr}
            disableRipple={true}
            sx={{ color: "black" }}
          >
            <AddCircleOutlineIcon sx={{ color: "#CFD2CF" }} />
          </Button>
        </Box>
      </Box>
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "white",
          backgroundColor: "#E11960",
          cursor: "pointer",
          pl: 2,
          pr: 2,
          width: "100px",
          borderRadius: "30px"
        }}
        aria-label="search"
        disableRipple={true}
      >
        <SearchIcon />
        <Typography>Search</Typography>
      </IconButton>
    </Stack>
  );
};

export default Guests;
