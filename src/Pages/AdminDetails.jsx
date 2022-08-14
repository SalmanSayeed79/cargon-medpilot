import React, { useEffect, useState ,useContext} from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Avatar,
  Button,
  TextField,
  Paper,
  CircularProgress,
} from "@mui/material";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import {
  Info,
  Preview,
  StarBorder,
  VpnKey,
  Details,
} from "@mui/icons-material";
import { DistributorIDContext } from "../Context/IDContextProvider";

export default function AdminDetails() {
  const axios=require('axios')
  const [showAccountInformation, setShowAccountInformation] = useState(true);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showChangeDetails, setShowChangeDetails] = useState(false);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const distributorIDSaved=useContext(DistributorIDContext)
  const baseURL="https://cargon-postgres.herokuapp.com"
  const adminURL=`${baseURL}/distributor/${distributorIDSaved}`
//{name:"Salman",address:"Helo",experience:"2",}
  const getAdminInfo = () => {
    setLoading(true);
    axios.get(adminURL)
      .then((a) => {
        setData(a.data)
        setLoading(false)
        console.log(a.data)
      })
   
  };

  const uploadImage=(file)=>{
    // fetch(`http://freeimage.host/api/1/upload/?key=6d207e02198a847aa98d0a2a901485a5&source=${file}`)
    //   .then((a) => a.json())
    //   .then((a) => console.log(a))
    //   //.then(() => setLoading(false));

      axios({
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        
        url: `https://freeimage.host/api/1/upload/?key=6d207e02198a847aa98d0a2a901485a5&source=${file}`,
        withCredentials: false,
      }).then(a=>console.log(a))
  }
  useEffect(getAdminInfo, []);

  return (
    <Paper sx={{ minHeight: "100vh", width: "100vw" }}>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar active={8} />
        </Grid>
        <Divider />
        <Grid item xs={10}>
          {loading && (
            <Box
              sx={{
                width: "100%",
                minHeight: "100vh",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CircularProgress />
              <Typography>Loading Admin Data....</Typography>
            </Box>
          )}
          {!loading && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "80vw",
                minHeight: "100%",
              }}
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
                Your Account
              </Typography>
              <Typography
                variant="p"
                sx={{ marginBottom: "2rem", textAlign: "left" }}
              >
                Your account information
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "2rem",
                }}
              >
                {!loading && <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    alt="Salman Sayeed"
                    src={data.image}
                    sx={{
                      width: { xs: "42px", md: "64px" },
                      height: { xs: "42px", md: "64px" },
                    }}
                  />
                  <Box sx={{ marginLeft: "20px" }}>
                    <Typography variant="h5">{data.name}</Typography>
                    <Typography variant="p" color="#8f8f8f">
                      {data.address}
                    </Typography>
                  </Box>
                </Box>}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80vw",
                  marginBottom: { xs: "8vh", md: "0" },
                }}
              >
                {/**Account Information */}
                <Button
                  variant={showAccountInformation ? "contained" : "outlined"}
                  sx={{
                    minHeight: { xs: "7vh", md: "20vh" },
                    minWidth: { xs: "100%", md: "25vw" },
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                  }}
                  onClick={() => {
                    setShowAccountInformation(!showAccountInformation);
                    setShowChangeDetails(false);
                    setShowChangePassword(false);
                  }}
                >
                  <Info />
                  Your account information
                </Button>

                {/**Change Password */}
                <Button
                  variant={showChangePassword ? "contained" : "outlined"}
                  sx={{
                    minHeight: { xs: "7vh", md: "20vh" },
                    minWidth: { xs: "100%", md: "25vw" },
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                  }}
                  onClick={() => {
                    setShowAccountInformation(false);
                    setShowChangeDetails(false);
                    setShowChangePassword(!showChangePassword);
                  }}
                >
                  <VpnKey />
                  Change Password
                </Button>

                {/**Change Details */}
                <Button
                  variant={showChangeDetails ? "contained" : "outlined"}
                  sx={{
                    minHeight: { xs: "7vh", md: "20vh" },
                    minWidth: { xs: "100%", md: "25vw" },
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                  }}
                  onClick={() => {
                    setShowAccountInformation(false);
                    setShowChangeDetails(!showChangeDetails);
                    setShowChangePassword(false);
                  }}
                >
                  <Details />
                  Change Your Details
                </Button>
              </Box>

              <Box>
                {showAccountInformation && !loading && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      width: "80vw",
                      minHeight: "20vh",
                      border: "1px solid primary.main",
                      padding: "1rem 0",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                        First Name :
                      </Typography>
                      <Typography sx={{ marginLeft: "1rem" }}>
                        {data.name}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                        Last Name :
                      </Typography>
                      <Typography sx={{ marginLeft: "1rem" }}>
                        {data.name}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                        Phone Number :
                      </Typography>
                      <Typography sx={{ marginLeft: "1rem" }}>
                        {data.phonenumber}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                        Gender :
                      </Typography>
                      <Typography sx={{ marginLeft: "1rem" }}>Male</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                        Emergency Contact :
                      </Typography>
                      <Typography sx={{ marginLeft: "1rem" }}>
                        +8802389410123
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                        Address :
                      </Typography>
                      <Typography sx={{ marginLeft: "1rem" }}>
                        {data.address}
                      </Typography>
                    </Box>
                  </Box>
                )}
                {showChangePassword && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "80vw",
                      minHeight: "20vh",
                      border: "1px solid primary.main",
                      padding: "1rem 0",
                    }}
                  >
                    <Typography variant="h5" sx={{ margin: "1rem 0" }}>
                      Change Password
                    </Typography>
                    <Box
                      sx={{
                        width: "75vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <TextField
                        type="password"
                        fullWidth
                        placeholder="Current Password"
                      ></TextField>
                      <TextField
                        type="password"
                        fullWidth
                        placeholder="New Password"
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <TextField
                        type="password"
                        fullWidth
                        placeholder="Confirm New Password"
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <Button variant="contained" sx={{ marginTop: "1rem" }}>
                        Change Password
                      </Button>
                    </Box>
                  </Box>
                )}
                {showChangeDetails && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "80vw",
                      minHeight: "20vh",
                      border: "1px solid primary.main",
                      padding: "1rem 0",
                    }}
                  >
                    <Typography variant="h5" sx={{ margin: "1rem 0" }}>
                      Change Account Information
                    </Typography>
                    <Box
                      sx={{
                        width: "75vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <input type="file" onChange={(file)=>uploadImage(file.target.value)}/>
                      <TextField fullWidth placeholder="First Name"></TextField>
                      <TextField
                        fullWidth
                        placeholder="Last Name"
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <TextField
                        fullWidth
                        placeholder="Phone Number"
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <TextField
                        fullWidth
                        placeholder="Region"
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <TextField
                        fullWidth
                        placeholder="Area"
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <TextField
                        fullWidth
                        placeholder="Zone"
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <TextField
                        fullWidth
                        placeholder="City"
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <TextField
                        fullWidth
                        placeholder="Gender"
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <TextField
                        fullWidth
                        placeholder="Email"
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <Button variant="contained" sx={{ marginTop: "1rem" }}>
                        Change Details
                      </Button>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
