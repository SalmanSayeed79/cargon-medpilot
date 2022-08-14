import React,{useState,useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {AppBar,Toolbar,Typography,Badge,Menu,Divider,ListItemIcon,Box,MenuItem,IconButton,Tooltip,Avatar,useTheme, TextField} from '@mui/material'
import {Mail,Notifications,Cancel,Settings,PersonAdd,Brightness7,Brightness4} from "@mui/icons-material"
import { ColorModeContext } from '../Context/ColorModeContext';
import { DistributorIDContext } from '../Context/IDContextProvider';
import axios from 'axios'

export default function Navbar() {
    const navigator=useNavigate();
    const goHome=()=>{
      navigator("/")
    }
    const theme=useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const AccOpen = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const {mode,toggleMode}=useContext(ColorModeContext)
    
    const distributorIDSaved=useContext(DistributorIDContext)
    const baseURL="https://cargon-postgres.herokuapp.com"
    const adminURL=`${baseURL}/distributor/${distributorIDSaved}`
    const [imgData,setImgData]=useState(null)
  //{name:"Salman",address:"Helo",experience:"2",}
    const getDistInfo = () => {

      axios.get(adminURL)
        .then((a) => {
          setImgData(a.data.image)
        })
     
    };
    useEffect(getDistInfo,[])
  return (

    <AppBar position='sticky'>
        <Toolbar sx={{display:"flex",justifyContent:"space-between"}} >
            <Box sx={{display:"flex",alignItems:"center",cursor:"pointer"}} onClick={goHome}>
              <Box component="img" src="https://i.postimg.cc/zf04BFYh/medpilot.png" sx={{width:"42px"}}/>
              <Typography variant="h6" sx={{display:{xs:"none",md:"flex",marginLeft:"10px"}}}>MillHouse</Typography>
            </Box> 
            <Box sx={{display:"flex",alignItems:"center"}}>
                <Box sx={{width:"120px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <IconButton color="inherit" onClick={()=>{
                    toggleMode()
                    console.log(mode)
                  }}>
                    {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                  </IconButton>
                    <Badge badgeContent={4} color="secondary" >
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color="secondary" >
                        <Notifications />
                    </Badge>
                </Box>
                <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ ml: 2 }}
            aria-controls={AccOpen ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={AccOpen ? 'true' : undefined}
          >
            <Avatar sx={{ width: 42, height: 42 }} src={imgData}>M</Avatar>
          </IconButton>
        </Tooltip>
     
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={AccOpen}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{display:"flex",justifyContent:"space-between"}}>
          <Avatar src={imgData}/> My Account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cancel fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
            </Box>
        </Toolbar>
    </AppBar>
  )
}
