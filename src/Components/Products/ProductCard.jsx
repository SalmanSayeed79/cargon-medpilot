import { Paper, Typography ,Box} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {productsList} from './ProductsList'
export default function ProductCard({data}) {
    const navigator=useNavigate()
    const handleClick=()=>{
        navigator(`/product/${data.product_id}`)
    }
  return (
    <Paper elevation={5} sx={{minWidth:{xs:"100%",md:"20%"},margin:"1vh 1vw",minHeight:"180px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer","&:hover":{
        backgroundColor:"primary.light",
    },}} onClick={handleClick}> 

        <Box component="img" src={data.image} sx={{width:"250px",margin:"10px"}}/>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"flex-start",width:"100%",margin:"10px 0"}}>
            <Box sx={{display:"flex",alignItems:"flex-end",margin:"0 1rem",maxWidth:"250px"}}>     
                <Typography variant="h4" sx={{marginRight:"1rem"}} color="primary.main">{data.name}</Typography>
                <Typography variant="p">{data.variant}</Typography>
            </Box>
            <Typography sx={{margin:"0 1rem",maxWidth:"200px"}}>{data.chemicalName}</Typography>
            <Typography sx={{margin:"0 1rem",maxWidth:"200px"}}>{data.variant} </Typography>
            <Typography sx={{margin:"0 1rem",maxWidth:"200px"}}>{data.intensity} </Typography>
            <Typography sx={{margin:"0 1rem",maxWidth:"200px"}}>Unit Price :  &#x9F3; {data.price}</Typography>
           
        </Box>
        
    </Paper>
  )
}