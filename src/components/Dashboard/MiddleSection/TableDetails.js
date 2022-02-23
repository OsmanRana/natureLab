import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const TableDetails = ({ singleData }) => {
  const { asset, chain, state, type, amount, referral_earnings, user, img } =
    singleData;
  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
      <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
        <img src={img} alt="logo" width="30px" height="30px" />
        <Box sx={{ ml: 2 }}>
          <Typography variant="body1">{asset}</Typography>
          <Box sx={{ display: "flex", color: "#808191" }}>
            <Typography variant="caption">{type}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 1,
                backgroundColor: "#353945",
                px: 1,
                borderRadius: 2,
              }}
            >
              {" "}
              <img src={chain.img} alt="logo" width="15px" />
              <Typography variant="caption" sx={{ mx: 1 }}>
                {chain.name}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ ml: 2, textAlign: "center" }}>
        <Typography variant="body1">{amount} BNB</Typography>
        <Typography
          variant="caption"
          sx={{ color: "#808191", textTransform: "capitalize" }}
        >
          {state}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
          {user}
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="body1">{referral_earnings} BNB</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="caption"
            sx={{ color: "#808191", textTransform: "capitalize" }}
          >
            View on BSC Scan
          </Typography>
          <OpenInNewIcon sx={{ color: "#808191", width: "15px", ml: 2 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default TableDetails;
