import { useState } from "react";
import { logo } from "../utils/constants";
import { Stack, Box, Modal, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Searchbar, MainDate, Destination, Guests } from "../components/index";

const SearchModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack direction="row">
      <Button className="search" onClick={() => setOpen(true)}>
        {<Searchbar />}
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ background: "fff" }}
      >
        <Box sx={{ bgcolor: "background.paper" }}>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              height={45}
              style={{ marginTop: "20px", marginLeft: "50px" }}
            />
          </Link>
          <Box
            sx={{
              p: 1.5,
              zIndex: 0,
              bgcolor: "background.paper",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Box
              sx={{
                display: "flex",
                direction: "row",
                borderRadius: "28px",
                backgroundColor: "#EBEBEB"
              }}
            >
              <Destination />
              <MainDate />
              <Guests />
            </Box>
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
};

export default SearchModal;
