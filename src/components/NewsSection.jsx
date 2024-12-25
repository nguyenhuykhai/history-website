import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

function NewsSection() {
  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        Tin Trong Ngành
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Bộ trưởng Phạm Thị Thanh Trà: Quyết tâm thực hiện thành công phương châm hành động năm 2024" />
        </ListItem>
      </List>
    </Box>
  );
}

export default NewsSection;
