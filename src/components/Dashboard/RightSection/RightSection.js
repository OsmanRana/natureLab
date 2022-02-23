import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CustomLink from "../../../shared/CustomLink";
import InputIcon from "@mui/icons-material/Input";

const RightSection = () => {
  return (
    <Box sx={{ mx: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#353945",
            px: 2,
            py: 1,
            borderRadius: 2,
          }}
        >
          <img src="/av.png" alt="logo" width="25px" />
          <Typography variant="body1" sx={{ mx: 3 }}>
            Avalanche
          </Typography>
          <KeyboardArrowDownIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2,
            py: 1,
            border: 1,
            borderColor: "#3772FF",
            borderRadius: 2,
          }}
        >
          <AccountBalanceWalletIcon sx={{ color: "#3772FF" }} />
          <Typography variant="body1" sx={{ mx: 3 }}>
            0xf6...1353
          </Typography>
          <KeyboardArrowDownIcon />
        </Box>
      </Box>
      <Box sx={{ display: "flex", my: 3 }}>
        <KeyboardBackspaceIcon />
        <Typography variant="body1" sx={{ ml: 2 }}>
          Custom link
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ my: 3 }}>
        https://testnet.xyz.xyz/trade?ref=
      </Typography>
      <form>
        <TextField
          fullWidth
          label="ENTER"
          id="fullWidth"
          sx={{ backgroundColor: "#242731", borderRadius: 4 }}
        />
      </form>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", my: 3 }}>
        <CustomLink />
        <Box sx={{ mr: 5 }}>
          <Button
            variant="text"
            sx={{
              color: "white",
              border: 1,
              borderRadius: 3,
              textTransform: "none",
              px: 2,
              py: 1,
              my: 2,
              "&: hover": {
                backgroundColor: "white",
                color: "#3772FF",
              },
            }}
          >
            <InputIcon sx={{ mr: 2 }} />
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RightSection;
