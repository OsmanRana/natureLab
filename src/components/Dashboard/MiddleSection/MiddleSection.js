import { Button, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LaunchIcon from "@mui/icons-material/Launch";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import tableHeader from "../../../mock/bottomTableHeader";
import TableDetails from "./TableDetails";
import CloseIcon from "@mui/icons-material/Close";

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
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  return (
    <Box sx={{ borderLeft: 1, borderRight: 1, px: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb:3 }}>
        <Link
          sx={{
            textDecoration: "none",
            color: "#808191",
            fontSize: "28px",
            "&:hover": {
              color: "white",
              fontSize: "30px",
              borderBottom: 2,
              borderColor: "#3772FF",
              cursor: "pointer",
            },
          }}
        >
          {" "}
          Section
        </Link>
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
      <CloseIcon
        sx={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "50%",
          ml: 130,
          mb: -2

        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#A3E3FF",
          borderRadius: 4,
          height: "86px",
          textAlign: "left",
          px: 5,
          py: 3,
          mb: 5,
        }}
      >
        <Box>
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

        <Box sx={{ mt: 3 }}>
          <img src="/bitCoin.png" alt="Bitcoin" width="180px" height="130px" />
        </Box>
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
        <Link
          sx={{
            textDecoration: "none",
            color: "#808191",
            fontSize: "28px",
            "&:hover": {
              color: "white",
              fontSize: "30px",
              borderBottom: 2,
              borderColor: "#3772FF",
              cursor: "pointer",
            },
          }}
        >
          {" "}
          First Tab
        </Link>
        <Link
          sx={{
            ml: 3,
            textDecoration: "none",
            color: "#808191",
            fontSize: "28px",
            "&:hover": {
              color: "white",
              fontSize: "30px",
              borderBottom: 2,
              borderColor: "#3772FF",
              cursor: "pointer",
            },
          }}
        >
          {" "}
          Second Tab
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#191B20",
          py: 2,
          px: 8,
          borderRadius: 4,
          my: 3,
        }}
      >
        {tableHeader.map((header) => {
          return (
            <Typography
              variant="caption"
              key={header.name}
              sx={{ textTransform: "uppercase", color: "#808191" }}
            >
              {header.name}
            </Typography>
          );
        })}
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(25, 27, 32, .4)",
          height: "65px",
          pt: 2,
          borderRadius: 4,
        }}
      >
        {data.slice(1).map((singleData) => (
          <TableDetails
            key={singleData.index}
            singleData={singleData}
          ></TableDetails>
        ))}
      </Box>
    </Box>
  );
};

export default MiddleSection;
