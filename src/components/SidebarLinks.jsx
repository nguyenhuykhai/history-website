import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from "@mui/icons-material/Map";
import ArticleIcon from "@mui/icons-material/Article";

function SidebarLinks() {
  return (
    <Box p={2} bgcolor="secondary.main" color="white" borderRadius={2}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/email">
            <ListItemIcon>
              <EmailIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Email Nội Bộ" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/map">
            <ListItemIcon>
              <MapIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Bản Đồ Hành Chính" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/documents">
            <ListItemIcon>
              <ArticleIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Văn Bản Quy Phạm" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default SidebarLinks;
