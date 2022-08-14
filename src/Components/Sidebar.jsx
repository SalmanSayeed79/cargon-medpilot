import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { Box,Paper,Typography } from '@mui/material'
import { AccountCircle, AccountCircleOutlined, Add, DeliveryDining, Factory, HomeRounded, Inventory2, InventoryRounded, Logout, Navigation, ViewListOutlined } from '@mui/icons-material'
import { UserAuth } from '../Context/AuthContext';
export default function Sidebar({active}) {
    const { user, logout } = UserAuth();
    const navigator= useNavigate();
    const pages={
        1:"/home",
        2:"/assigned",
        3:"/delivered",
        4:"/admin"
    }
    const handleClick=(idx)=>{
        navigator(pages[idx])
    }
    const handleLogout = async () => {
        try {
          await logout();
          navigator('/');
          console.log('You are logged out')
        } catch (e) {
          console.log(e.message);
        }
      };
  return (
    <Paper elevation={2} sx={{height:"100vh",position:"fixed",top:"0",marginTop:"7vh",marginRight:"2vw",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <Box>
        {active===1 ? <Box sx={{width:"100%",height:"5vh",backgroundColor:"primary.main",display:"flex",alignItems:"center",cursor:"pointer",justifyContent:"flex-start"}}>
            <HomeRounded fontSize="medium" sx={{padding:"0 15px",color:"white"}} />
            <Typography variant="subtitle1" sx={{display:{xs:"none",md:"flex"},color:"white",fontWeight:"bold"}}>Homepage</Typography>
        </Box>:
        
        <Box sx={{width:"100%",height:"5vh",display:"flex",alignItems:"center",cursor:"pointer",justifyContent:"flex-start",textDecoration:"none"}} onClick={()=>handleClick(1)}>
            <HomeRounded fontSize="medium" sx={{padding:"0 15px",textDecoration:"none"}} />
            <Typography variant="subtitle1" sx={{display:{xs:"none",md:"flex"},textDecoration:"none",fontWeight:"semi-bold"}}>Homepage</Typography>
        </Box>
      
        }
        {active===2 ? <Box sx={{width:"100%",height:"5vh",backgroundColor:"primary.main",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"flex-start"}}>
            <ViewListOutlined fontSize="medium" sx={{padding:"0 15px",color:"white"}} />
            <Typography variant="subtitle1" sx={{display:{xs:"none",md:"flex"},color:"white",fontWeight:"bold"}}>Assigned Orders</Typography>
        </Box>:
        
        <Box sx={{width:"100%",height:"5vh",display:"flex",alignItems:"center",cursor:"pointer",justifyContent:"flex-start"}} onClick={()=>handleClick(2)}>
            <ViewListOutlined fontSize="medium" sx={{padding:"0 15px"}} />
            <Typography variant="subtitle1" sx={{display:{xs:"none",md:"flex"},fontWeight:"semi-bold"}}>Assigned Orders</Typography>
        </Box>
       
        }
        {active===3 ? <Box sx={{width:"100%",height:"5vh",backgroundColor:"primary.main",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"flex-start"}}>
            <DeliveryDining fontSize="medium" sx={{padding:"0 15px",color:"white"}} />
            <Typography variant="subtitle1" sx={{display:{xs:"none",md:"flex"},color:"white",fontWeight:"bold"}}>Delivered Orders</Typography>
        </Box>:
        <Box sx={{width:"100%",height:"5vh",display:"flex",alignItems:"center",cursor:"pointer",justifyContent:"flex-start"}} onClick={()=>handleClick(3)}>
            <DeliveryDining fontSize="medium" sx={{padding:"0 15px"}} />
            <Typography variant="subtitle1" sx={{display:{xs:"none",md:"flex"},fontWeight:"semi-bold"}}>Delivered Orders</Typography>
        </Box>
        }
        </Box>
        <Box sx={{marginBottom:"10vh"}}>
        {active===4 ? <Box sx={{width:"100%",height:"5vh",backgroundColor:"primary.main",display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"flex-start"}}>
            <AccountCircle fontSize="medium" sx={{padding:"0 15px",color:"white"}} />
            <Typography variant="subtitle1" sx={{display:{xs:"none",md:"flex"},color:"white",fontWeight:"bold"}}>Account Details</Typography>
        </Box>:
        <Box sx={{width:"100%",height:"5vh",display:"flex",alignItems:"center",cursor:"pointer",justifyContent:"flex-start"}} onClick={()=>handleClick(4)}>
            <AccountCircleOutlined fontSize="medium" sx={{padding:"0 15px"}} />
            <Typography variant="subtitle1" sx={{display:{xs:"none",md:"flex"},fontWeight:"semi-bold"}}>Account Details</Typography>
        </Box>
        }
        <Box sx={{width:"100%",height:"5vh",display:"flex",alignItems:"center",cursor:"pointer",justifyContent:"flex-start"}} onClick={()=>{
            alert("Are you sure you want to logout?")
            handleLogout()
        }}>
            <Logout fontSize="medium" sx={{padding:"0 15px"}} />
            <Typography variant="subtitle1" sx={{display:{xs:"none",md:"flex"},fontWeight:"semi-bold"}}>Logout</Typography>
        </Box>
        </Box>
    </Paper>
  )
}
