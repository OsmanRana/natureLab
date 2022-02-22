import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LaunchIcon from "@mui/icons-material/Launch";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Brightness1Icon from "@mui/icons-material/Brightness1";
const commonSubsectionStyle = {
  backgroundColor: "#191B20",
  borderRadius: "24px",
  height: "165px",
  textAlign: "left",
  padding: "30px 40px",
};

const commonDisplay = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const textStyle1 = {
  display: "inline-block",
  backgroundColor: "#353945",
  padding: "10px 20px",
  borderRadius: "15px",
};
const textStyle2 = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#353945",
  padding: "10px 20px",
  borderRadius: "15px",
};

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
          px: 5,
          py: 3,
          my: 5,
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
            textTransform: "none",
            px: 2,
            py: 1,
            my: 2,
            "&: hover": {
              backgroundColor: "#3772FF",
              color: "white",
            },
          }}
        >
          Tutorial
        </Button>
      </Box>
      <Box
        style={commonSubsectionStyle}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h5">Your rewards</Typography>
          <Typography variant="h4" sx={{ my: 3 }}>
            $ 0.26231428
          </Typography>

          <Box>
            <Typography variant="body2" style={textStyle1}>
              $40 AVAX
            </Typography>
            <Typography variant="body2" style={textStyle1} sx={{ mx: 3 }}>
              $10 BNB
            </Typography>
            <Typography variant="body2" style={textStyle1}>
              $210 BTC
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mr: 5 }}>
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#3772FF",
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
            <LaunchIcon sx={{ mr: 2 }} />
            Custom Link
          </Button>
        </Box>
      </Box>
      <Box style={commonDisplay} sx={{ my: 3 }}>
        <Box style={commonSubsectionStyle} sx={{ width: 1, mr: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Brightness1Icon sx={{ color: "#9C92DF" }} />
            <Typography variant="h5" sx={{ ml: 2 }}>
              <span style={{ fontWeight: "bold" }}>12.5% </span>of fee
            </Typography>
          </Box>
          <Typography
            variant="body1"
            style={{ color: "#808191", margin: "20px 0px" }}
          >
            Your Referral Link for xyz
          </Typography>
          <Box style={textStyle2}>
            <Typography variant="body1">
              https://unityexchange.design
            </Typography>
            <LibraryAddCheckIcon />
          </Box>
        </Box>
        <Box style={commonSubsectionStyle} sx={{ width: 1, ml: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Brightness1Icon sx={{ color: "#9C92DF" }} />
            <Typography variant="h5" sx={{ ml: 2 }}>
              <span style={{ fontWeight: "bold" }}>12.5% </span>of fee
            </Typography>
          </Box>
          <Typography
            variant="body1"
            style={{ color: "#808191", margin: "20px 0px" }}
          >
            Your Referral Link for xyz
          </Typography>
          <Box style={textStyle2}>
            <Typography variant="body1">
              https://unityexchange.design
            </Typography>
            <LibraryAddCheckIcon />
          </Box>
        </Box>
      </Box>
      <Box sx={{ textAlign: "left" }}>
        {" "}
        <Typography
          variant="h5"
          sx={{
            display: "inline-block",
            borderBottom: 2,
            borderColor: "#3772FF",
          }}
        >
          First Tab
        </Typography>
        <Typography
          variant="h5"
          sx={{
            display: "inline-block",
            color: "#808191",
            ml: 3,
          }}
        >
          Second Tab
        </Typography>
      </Box>
    </Box>
  );
};

export default MiddleSection;
