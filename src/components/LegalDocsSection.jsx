import React from "react";
import { Box, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

function LegalDocsSection() {
  const documents = [
    { title: "Thông tư số 16/2023/TTBNV ngày 15/11/2023", link: "#" },
    { title: "Quy định mức kinh phí xử lý tài liệu lưu trữ", link: "#" },
    { title: "Chính sách hỗ trợ lưu trữ tài liệu", link: "#" },
  ];

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        Văn Bản Pháp Lý
      </Typography>
      <List>
        {documents.map((doc, index) => (
          <ListItem key={index}>
            <ListItemButton component="a" href={doc.link}>
              <ListItemText primary={doc.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default LegalDocsSection;
