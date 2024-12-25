import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Lịch sử Đảng - Hồ Chí Minh - Việt Nam
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/news">News</Button>
          <Button color="inherit" component={Link} to="/resources">Resources</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
