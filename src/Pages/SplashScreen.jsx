import React,{useEffect, useState} from 'react'
import {Paper,Box,Typography} from '@mui/material'
import {GridLoader} from 'react-spinners'
import "../Animations/Animation.css"
export default function SplashScreen() {

    const [screen,setScreen]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setScreen(screen+1)
            
        },3000)
    },[])
  return (
    <Paper  >
        {screen==0 && <Box sx={{minHeight: "100vh", width: "100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
            <Box component="img" src="https://i.postimg.cc/zf04BFYh/medpilot.png" sx={{width:"200px"}} className="grow"/>
          <Typography variant="h6" sx={{marginTop:"1vh"}} color="primary.main">Welcome to MedPilot</Typography>
        </Box>}
        {screen==1 && <Box sx={{minHeight: "100vh", width: "100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" ,backgroundColor:"primary.main"}}>
            <GridLoader color="white"/>
            <Typography variant="h6" color="white" sx={{marginTop:"3vh"}}>We are getting things ready for you....</Typography>
        </Box>}
        {screen==2 && <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" ,backgroundColor:"primary.main"}}>
            <GridLoader color="white"/>
            <Typography variant="h6" color="white" sx={{marginTop:"3vh"}}>We care about you</Typography>
        </Box>}
    </Paper>
  )
}
