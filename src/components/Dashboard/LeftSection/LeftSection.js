import { Box, Typography } from "@mui/material";
import React from "react";
import sectionList from "../../../mock/leftSection";
import LeftSectionDetails from "./LeftSectionDtails/LeftSectionDetails";
import DehazeIcon from "@mui/icons-material/Dehaze";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CircleIcon from "@mui/icons-material/Circle";

const LeftSection = () => {
  return (
    <Box sx={{ borderRight: 1, borderColor: "#808191" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mr: 8,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", ml: 3 }}>
          <Typography
            variant="h6"
            style={{
              backgroundColor: "#3772FF",
              display: "inline-block",
              borderRadius: "50%",
              padding: "1px 10px",
              marginRight: "10px",
            }}
          >
            N
          </Typography>
          <Typography variant="h4">Name</Typography>
        </Box>
        <DehazeIcon />
      </Box>
      <Box>
        {sectionList.map((listItem) => (
          <LeftSectionDetails key={listItem.id} listItem={listItem} />
        ))}
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: 3,
            mt: 16,
            mb: 3,
            backgroundColor: "#353945",
            py: 1,
            px: 3,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="body2"
            style={{
              backgroundColor: "#3772FF",
              display: "inline-block",
              borderRadius: "50%",
              padding: "0 5px",
              marginRight: "10px",
            }}
          >
            N
          </Typography>
          <Typography variant="body2">$0.90</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: 3,
            mt: 16,
            mb: 3,
            backgroundColor: "#A3E3FF",
            color: "#3772FF",
            py: 1,
            px: 3,
            borderRadius: 3,
          }}
        >
          <Typography variant="body2">Buy $XYZ</Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: "left", ml: 3, display: "flex" }}>
        <Box sx={{ pt: 1 }}>
          <LanguageIcon sx={{ color: "#808191" }} />
        </Box>
        <Box
          sx={{
            backgroundColor: "#353945",
            ml: 3,
            px: 1,
            pt: 1,
            pb: 0.5,
            borderRadius: 16,
          }}
        >
          <DarkModeIcon sx={{ color: "#808191" }} />
          <CircleIcon sx={{ color: "#3772FF", ml: 2 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSection;
