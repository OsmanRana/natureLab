import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const TableDetails = ({ singleData }) => {
  console.log(singleData);
  const { asset, chain, state, type, amount, referral_earnings, user } =
    singleData;
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ display: "flex" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png"
          alt="logo"
          width="30px"
          height="30px"
        />
        <Box>
          <Typography>{asset}</Typography>
          <Typography>{type}</Typography>
          <Box>
            {" "}
            <img src={chain.img} alt="logo" />
            <Typography>{chain.name}</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography>{amount} BNB</Typography>
        <Typography>{state}</Typography>
      </Box>
      <Box>
        <Typography>{user}</Typography>
      </Box>
      <Box>
        <Typography>{referral_earnings} BNB</Typography>
        <Typography>View on BSC Scan</Typography>
        <OpenInNewIcon sx={{ color: "white" }} />
      </Box>
    </Box>
  );
};

export default TableDetails;
