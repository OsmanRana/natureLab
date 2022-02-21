import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const MiddleSection = () => {
  return (
    <Box sx={{ mx: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          sx={{
            display: "inline-block",
            borderBottom: 2,
            borderColor: "#3772FF",
          }}
        >
          Section
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#191B20",
            px: 2,
            py: 1,
            borderRadius: 2,
          }}
        >
          <AccountBalanceWalletIcon sx={{ color: "#3772FF" }} />
          <Typography variant="body1" sx={{ mx: 3 }}>
            0.2 $XYZ
          </Typography>
          <Typography
            variant="body2"
            sx={{
              backgroundColor: "#A3E3FF",
              color: "#3772FF",
              px: 1,
              borderRadius: 1,
            }}
          >
            Tier 1
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#A3E3FF",
          borderRadius: 4,
          height: "86px",
          textAlign: "left",
          p: 3,
          my:5
        }}
      >
        <Typography variant="body1" sx={{ color: "#2B2557" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: "#2B2557",
            backgroundColor: "white",
            display: "inline-block",
            borderRadius: 2,
            textTransform: 'none',
            px: 2,
            py: 1,
            my: 2,
            "&: hover": {
                backgroundColor: "#3772FF",
                color: "white"
            }
          }}
        >
          Tutorial
        </Button>
      </Box>
    </Box>
  );
};

export default MiddleSection;
