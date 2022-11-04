import React from "react";
import { Typography, Stack, Box, Paper, Button, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const search = [
  { no: 1, name: "Anywhere" },
  { no: 2, name: "Any Week" },
  { no: 3, name: "Add Guests" }
];
const Searchbar = () => {
  return (
    <Paper sx={{ borderRadius: 20 }} elevation={3}>
      <Stack direction="row">
        {" "}
        <Stack
          sx={{ borderRadius: 20, pl: 2 }}
          divider={
            <Divider orientation="vertical" flexItem sx={{ mt: 1, mb: 1 }} />
          }
          direction="row"
        >
          {search.map((se) => {
            return (
              <Button key={se.no} p={10}>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: "350",
                    textTransform: "capitalize",
                    pl: "10px",
                    pr: "10px"
                  }}
                >
                  {se.name}
                </Typography>
              </Button>
            );
          })}
        </Stack>
        <Box>
          <Button>
            <SearchIcon
              sx={{
                fontSize: "32px",
                mt: 1,
                ml: 0.5,
                mr: 1,
                mb: 1,
                p: 1,
                color: "#fff",
                borderRadius: 20,
                background: "#FF5A5F"
              }}
            />
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};

export default Searchbar;
