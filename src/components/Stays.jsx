import React from "react";
import { Stack, Box } from "@mui/material";

import { Cards } from "./";

const Stays = () => {
  // if(!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>{item.id.videoId && <Cards video={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Stays;
