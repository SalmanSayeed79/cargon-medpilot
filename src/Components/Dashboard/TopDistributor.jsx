import {
  Box,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  TableContainer,
} from "@mui/material";
import React from "react";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
export default function TopDistributor() {
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", md: "40%" },
        minHeight: "40vh",
        margin: "5vh 0",
        padding: "1rem",
        "&::-webkit-scrollbar": {
          width: 20,
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "orange",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "red",
          borderRadius: 2,
        },
      }}
    >
      <Typography color="primary.main" variant="h4" sx={{ margin: "1rem 0" }}>
        {" "}
        &#127942; Top Distributors{" "}
      </Typography>
      <TableContainer sx={{width:"100%" }}>
        <Table
          sx={{ width: "max-content", overflowX: "scroll" }}
          stickyHeader
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box sx={{ display: "flex" }}>
                    <Avatar /> {row.name}
                  </Box>
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
