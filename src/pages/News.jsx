import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

function News() {
  const news = [
    {
      title: "Bộ trưởng Phạm Thị Thanh Trà: Quyết tâm thực hiện thành công...",
      image: "/path-to-image1.jpg",
      description: "Chi tiết nội dung tin tức.",
    },
    {
      title: "Ngày thành lập tỉnh Đắk Lắk: Những thành tựu nổi bật...",
      image: "/path-to-image2.jpg",
      description: "Chi tiết nội dung tin tức.",
    },
  ];

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Tin Tức
      </Typography>
      <Grid container spacing={2}>
        {news.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardMedia component="img" height="140" image={item.image} alt={item.title} />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default News;
