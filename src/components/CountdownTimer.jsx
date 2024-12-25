import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

function CountdownTimer() {
  const targetDate = new Date("2024-11-22").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box p={2} bgcolor="secondary.main" color="white" borderRadius={2} textAlign="center">
      <Typography variant="h5">Ngày Thành Lập Tỉnh Đắk Lắk</Typography>
      <Typography variant="h6">
        {timeLeft.days} ngày {timeLeft.hours} giờ {timeLeft.minutes} phút {timeLeft.seconds} giây
      </Typography>
    </Box>
  );
}

export default CountdownTimer;
