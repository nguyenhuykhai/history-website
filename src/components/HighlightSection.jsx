import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

function HighlightSection() {
  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Tin Nổi Bật
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/path-to-image.jpg"
              alt="Highlight"
            />
            <CardContent>
              <Typography variant="h6">
                Đảng Cộng sản Việt Nam nhân tố quyết định mọi thắng lợi của cách mạng Việt Nam
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chi tiết tin tức nổi bật.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HighlightSection;
