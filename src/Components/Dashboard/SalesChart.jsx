import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { Typography, Paper, Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
  scales: {
    x: 
      {
        grid: {
          display:false
        },
      },
    y: 
      {
        grid: {
          drawBorder:false,
          display: false,
        },
        ticks:{
          display:false
        }
      },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Wholesaler sales",
      data: [4, 12, 3, 8, 23, 1, 4],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Consumer Sales",
      data: [8, 23, 1, 4, 4, 12, 3],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function SalesChart() {
  //ChartJS.defaults.scale.gridLines.display = false;
  return (
    <Paper
      elevation={5}
      sx={{
        width: { xs: "90%", md: "80%" },
        height: "40vh",
        margin: "2rem 0",
        padding: "1rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography color="primary.main" variant="h4" sx={{ width: "90%" }}>
        {" "}
        &#127942; Sales(Over the months){" "}
      </Typography>
      <Box sx={{ width: "90%", height: "90%" }}>
        <Bar options={options} data={data} />
      </Box>
    </Paper>
  );
}
