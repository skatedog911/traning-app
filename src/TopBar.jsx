import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

function TopBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            Training
          </Typography>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
