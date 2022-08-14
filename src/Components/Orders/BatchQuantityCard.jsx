import React,{useState} from 'react'
import { Paper,Box,Typography,Button, IconButton, TextField, CircularProgress } from '@mui/material'
import { Add, Done, Remove } from '@mui/icons-material'
import axios from 'axios'
export default function BatchQuantityCard(props) {
    const [quantity,setQuantity]=useState(0)
    const [updating,setUpdating]=useState(false)
    const increaseQuantity=()=>{
        console.log("hello")
        if(props.data.current_quantity-quantity>0){
            setQuantity(quantity+1)
        }else{
            alert("Stock for this batch exceeded")
        }
    }
    const decreseQuantity=()=>{
        console.log("hello")
        if(quantity>0){
            setQuantity(quantity-1)
        }else{
            alert("Quantity must be greater than 0")
        }
    }
    const changeQuantity=(val)=>{
        console.log("hello")
        if(props.data.current_quantity-val>=0 && val>=0){
            setQuantity(val)
        }else{
            alert("Quantity must be greater than 0 and in stock")
        }
    }
    const baseURL="https://cargon-postgres.herokuapp.com"
    const changeBatch=()=>{
        setUpdating(true)
        axios.post(`${baseURL}/batch/update/${props.data.batch_id}/${quantity}`).then(()=>{
            alert("Batch Updated")
            setUpdating(false)
        })
    }
    return(
    <Paper elevation={3} sx={{width:"90%",margin:"1vh 1vw",minHeight:"7vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around"}}>
        
    <Box sx={{display:"flex",width:{md:"60%",xs:"90%"},flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
        <Box sx={{display:"flex",flexDirection:"column"}}>
            <Typography variant="h3" sx={{fontSize:{xs:"32px",md:"50px"}}} color="primary.main">{props.data.batch_id}</Typography>
            <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Batch ID</Typography>
        </Box>
        <Box  sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
              <Typography variant="h3" sx={{fontSize:{xs:"32px",md:"50px"}}}>{props.data.current_quantity-quantity}</Typography>
              <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Stock</Typography>
        </Box>
        <Box  sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
 
              <TextField  sx={{fontSize:{xs:"32px",md:"50px"},width:"75px"}} value={quantity} onChange={e=>changeQuantity(e.target.value)}/>
              <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Cart</Typography>
        </Box>
    </Box>
        <Box sx={{display:'flex',height:{xs:"50%",md:"25%"},width:{md:"40%"},margin:"10px"}}>
            <Button variant="outlined" onClick={decreseQuantity} ><Remove/></Button>
            <Button variant="outlined" onClick={increaseQuantity} ><Add/></Button>
            <Button variant="contained" sx={{marginLeft:"2vw"}} onClick={changeBatch}>{!updating && <Done/>}{updating && <CircularProgress/>}</Button>
        </Box>
      
        
    
    </Paper>)
}

