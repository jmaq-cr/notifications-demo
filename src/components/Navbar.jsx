import React from "react";
import { AppBar, Toolbar, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Notifications Demo
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button component={Link} to="/" color="inherit">
            Notifications
          </Button>
          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
