import React, { useContext,useEffect,useState } from "react";
import { Box, Typography, Grow ,Grid, Divider, Paper, CircularProgress } from "@mui/material";
import CountUp from "react-countup";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import TopDistributor from "../Components/Dashboard/TopDistributor";
import RecentOrders from "../Components/Dashboard/RecentOrders";
import {SalesChart } from "../Components/Dashboard/SalesChart";
import { OrderChart } from "../Components/Dashboard/OrdersChart";
import {GridLoader} from 'react-spinners'

export default function Dashboard() {
  const [data,setData]=useState(null)
  const [loading,setLoading]=useState(false)
  
  const getOrderCount=()=>{
    // fetch("http://localhost:8034/retailers")
    //   .then((a) => a.json())
    //   .then((a) => console.log(a))
    //   .then(() => setLoading(false));
  }
  useEffect(()=>{
    setTimeout(()=>{
      getOrderCount()
    },5000)
  },[])
  
  return (
     <Paper sx={{ minHeight: "100vh", width: "100vw" }}>
      <Navbar />
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="flex-start"
        gap={0}
      >
        <Grid item xs={2}>
          <Sidebar active={1} />
        </Grid>

        <Grid item xs={10}>
          <Box
            sx={{ minHeight: "100vh", width: "100%" }}
            color="primary.main"
          >
            <Typography
              variant="h3"
              color="primary"
              sx={{
                marginTop: "1rem",
                fontSize: { xs: "36px", md: "56px" },
                textAlign: "left",
              }}
            >
              Dashboard
            </Typography>

            <Box sx={{display:"flex",flexWrap:"wrap",width:"100%",alignItems:"flex-start",justifyContent:"flex-start"}}>
            <Paper elevation={5} sx={{display:"flex",flexDirection:"column",width:{xs:"90%",md:"25%"},minHeight:"15vh",marginTop:"2vh",marginRight:"2vw",alignItems:"flex-start",justifyContent:"center",
            background: "rgb(128,203,196)",
            background: "linear-gradient(45deg, rgba(128,203,196,1) 0%, rgba(38,166,154,1) 78%, rgba(0,121,107,1) 100%)"}}>
              <Box sx={{marginLeft:"20px"}}>
              
              <Typography variant="h6" >	&#128176; Total Sales</Typography>
              <Typography variant="h2" ><CountUp start={0} duration={1} end={12350} suffix= " BDT"></CountUp> </Typography>
              </Box>
            </Paper>
            <Paper elevation={5} sx={{display:"flex",flexDirection:"column",width:{xs:"90%",md:"25%"},minHeight:"15vh",marginTop:"2vh",marginRight:"2vw",alignItems:"flex-start",justifyContent:"center",
            background: "rgb(165,214,167)",
            background: "linear-gradient(45deg, rgba(165,214,167,1) 0%, rgba(102,187,106,1) 43%, rgba(67,160,71,1) 100%)"}}>
              <Box sx={{marginLeft:"20px"}}>
              
              <Typography variant="h6" >&#128188; Total Distributors</Typography>
              <Typography variant="h2" ><CountUp start={0} duration={1} end={5634} ></CountUp></Typography>
              </Box>
            </Paper>
              <Paper elevation={5} sx={{display:"flex",flexDirection:"column",width:{xs:"90%",md:"25%"},minHeight:"15vh",marginTop:"2vh",marginRight:"2vw",alignItems:"flex-start",justifyContent:"center",background: "rgb(244,143,177)",
              background: "linear-gradient(45deg, rgba(244,143,177,1) 0%, rgba(236,64,122,1) 43%, rgba(216,27,96,1) 100%)"}}>
              <Box sx={{marginLeft:"20px"}}>
              
              <Typography variant="h6" >&#128105; Total Customers</Typography>
              <Typography variant="h2" ><CountUp start={0} duration={1} end={76343} ></CountUp></Typography>
              </Box>
            </Paper>
           
            </Box>
            <SalesChart/>
            <Box sx={{display:"flex",width:"80%",justifyContent:"space-between",flexWrap:"wrap"}}>
              <TopDistributor/>
              <RecentOrders/>
            </Box>
            <OrderChart/>
          </Box>
        </Grid>
      </Grid>
    </Paper>

  );
}
