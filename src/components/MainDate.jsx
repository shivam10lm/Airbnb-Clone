import { useState } from "react";

import { TextField, Box, Stack } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const MainDate = () => {
  const [value, setValue] = useState([null, null]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: "Check in", end: "Check out" }}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <Stack direction="row">
            <TextField
              {...startProps}
              sx={{
                bgcolor: "background.paper",
                height: "55px",
                borderRadius: "50px",
                width: "120px",
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none"
                  },
                  "&:hover fieldset": {
                    borderColor: "none"
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "none"
                  }
                }
              }}
            />
            <Box sx={{ mx: 0.1 }} />
            <TextField
              {...endProps}
              sx={{
                bgcolor: "background.paper",
                height: "55px",
                borderRadius: "50px",
                width: "120px",
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none"
                  },
                  "&:hover fieldset": {
                    borderColor: "none"
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "none"
                  }
                }
              }}
            />
          </Stack>
        )}
      />
    </LocalizationProvider>
  );
};

export default MainDate;
