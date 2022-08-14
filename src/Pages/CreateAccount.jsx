import React,{useContext, useState} from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  FormControlLabel,
  TextField,
  Checkbox,
  Button,
  Paper,
  Link,
  Stepper,
  StepLabel,
  InputLabel,
  Step,
  CircularProgress,
  Snackbar,
  Alert
} from "@mui/material";
import { LineAxisSharp, LockOutlined } from "@mui/icons-material";
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import { AdminIDContext, AdminIDUpdateContext, FactoryIDContext, FactoryIDUpdateContext } from "../Context/IDContextProvider";
import { UserAuth } from '../Context/AuthContext';

export default function CreateAccount() {

  const navigator= useNavigate()


  const [loadingAdmin,setLoadingAdmin]=useState(false)
  const [loadingFactory,setLoadingFactory]=useState(false)

  const [successSnackbar,setSuccessSnackBar]=useState(false)
  const [failSnackBar,setFailSnackBar]=useState(false)

  const [email,setEmail]=useState(null)
  const [password,setPassword]=useState(null)
  const [confirmPassword,setConfirmPassword]=useState(null)
  const [name,setName]=useState(null)
  const [phoneNumber,setPhoneNumber]=useState(null)
  const [address,setAddress]=useState(null)
  const [image,setImage]=useState(null)
  const [region,setRegion]=useState(null)
  const [lat,setLat]=useState(null)
  const [lng,setLng]=useState(null)

  const { createUser } = UserAuth();
  const closeSnackBar=()=>{
    setSuccessSnackBar(false)
    setFailSnackBar(false)
  }

  const handleSubmit = () => {
    navigator("/home");
  };
  const handleLogin=()=>{
    navigator("/")
  }
  const [activeStep,setActiveStep]=useState(0)

  const addDistributor=async ()=>{
    setLoadingAdmin(true)
    try {
      await createUser(email, password);
    } catch (e) {
      console.log(e.message);
    }
    finally{
      axios.post(`${baseURL}/distributor`,{
        "name":name,
        "address":address,
        "region":region,
        "phone_number":phoneNumber,
        "image":image,
        "lat":lat,
        "lng":lng,
        "email":email
      })
      .then((res)=>{
        setLoadingAdmin(false)
        //alert("Admin Created")
        setSuccessSnackBar(true)
        navigator("/")
      })
      .catch(e=>{
        setLoadingAdmin(false)
        setFailSnackBar(true)
        console.log(e)
        //alert("Some Error Occured")
      })
    }
    
  }

  const baseURL="https://cargon-postgres.herokuapp.com"

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          width: { xs: "90%", md: "70%" },
          minHeight: "70%",
          margin:"5vh 0",
          padding: "2vh 0",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "70%", md: "50%" },
            backgroundColor: "primary.light",
          }}
          component="img"
          src="https://i.postimg.cc/BvjwSL4Z/undraw-Account-re-o7id.png"
        />

        <Box
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "80%", md: "50%" },
            padding: { md: "3rem" },
            paddingBottom: { xs: "1rem", md: 0 },
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
       
          {/**Admin INFO */}
          {<Box
            sx={{ mt: 1 }}
          >
          <InputLabel>Name</InputLabel>
          <TextField  variant="outlined" fullWidth value={name} onChange={e=>setName(e.target.value)} />
          <InputLabel>Image</InputLabel>
          <TextField variant="outlined" fullWidth value={image} onChange={e=>setImage(e.target.value)} />
          <InputLabel>Phone Number</InputLabel>
          <TextField   variant="outlined" value={phoneNumber} fullWidth onChange={e=>setPhoneNumber(e.target.value)} />
          <InputLabel>Address</InputLabel>
          <TextField  variant="outlined" fullWidth value={address} onChange={e=>setAddress(e.target.value)} />
          <InputLabel>Region</InputLabel>
          <TextField  variant="outlined" fullWidth value={region} onChange={e=>setRegion(e.target.value)} />
          <InputLabel>Email</InputLabel>
          <TextField variant="outlined" fullWidth value={email} onChange={e=>setEmail(e.target.value)} />
          <InputLabel>Password</InputLabel>
          <TextField type="password" variant="outlined" fullWidth value={password} onChange={e=>setPassword(e.target.value)} />
          <InputLabel>Confirm Password </InputLabel>
          <TextField type="password" variant="outlined" fullWidth value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
          
           
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{
                addDistributor();
              }}
            >
            {!loadingAdmin && <Typography>Create Account</Typography>}
            {loadingAdmin && <Box sx={{display:"flex",alignItems:'center'}}><CircularProgress color="info" size={20}/><Typography sx={{marginLeft:"10px"}}>Creating Account</Typography></Box>}
            </Button>
            <Grid container>
            <Grid item>
              <Link onClick={handleLogin} variant="body2" sx={{cursor:"pointer"}}>
                {"Have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
          </Box>}
        </Box>
      </Paper>
      <Snackbar open={successSnackbar} autoHideDuration={6000} onClose={closeSnackBar}>
        <Alert onClose={closeSnackBar} severity="success" sx={{ width: '100%' }}>
          Login Successful
        </Alert>
      </Snackbar>
        <Snackbar open={failSnackBar} autoHideDuration={6000} onClose={closeSnackBar}>
          <Alert onClose={closeSnackBar} severity="error" sx={{ width: '100%' }}>
            Login Failed
      </Alert>
    </Snackbar>
    </Box>
  );
}
