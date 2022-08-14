import { AddAPhoto, ArrowForward, AssignmentInd, CheckBox, Done, ExpandMore, Group, LineAxisOutlined, Man, Pending, SwipeRight } from '@mui/icons-material';
import { Paper,Select,Stepper,Step,StepLabel,Accordion,Divider,AccordionSummary,AccordionDetails,Box, Typography, StepContent, Button, MenuItem, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import OrderHandling from './OrderHandling';
export default function OrderCard({data}) {
  const navigator=useNavigate()
  const [activeStep,setActiveStep]=useState(2)
  const productIdList=[48,36,122]

  const baseURL="https://cargon-postgres.herokuapp.com"
  //const baseURL="http://localhost:8081"
  const orderURL=`${baseURL}/orders`
  const totalOrderURL=`${baseURL}/orderCount`
  const todayOrderURL=`${baseURL}/orderCount`
  const filledOrderURL=`${baseURL}/orderCount`
  

  const [loading,setLoading]=useState(true)
  const [orderData,setOrderData]=useState(null)
  const getOrderInfo= async ()=>{
    const res = await axios.get(`${baseURL}/orderProduct/order_id/${data.order_id}`)
    setOrderData(res.data)
    setLoading(false)
    console.log(res.data)
  }

  useEffect(()=>{
    getOrderInfo()
  },[])

  const markAsDelivered=async()=>{
    try{
      await axios.post(`${baseURL}/status/updateStatus`,{
        "order_id":data.order_id,
        "name":"DELIVERED",
        "time":Date.now()
      })
    }catch(e){
      console.log(e)
    }
    
  }
  return (
    <Accordion sx={{width:"100%",minHeight:"12vh",margin:"1vh 0"}} elevation={3}>
      <AccordionSummary>
        <Box sx={{width:"50%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginLeft:"1vw",marginBottom:"2vh"}}>
          <Typography variant="h6">Order # {data.order_id}</Typography>
          <Typography variant="p"><Moment format="D MMM YYYY , HH:MM" withTitle>{Date.now()}</Moment></Typography>
          <Typography color="success.main">Esitmated Delivery on <Moment format="D MMM" withTitle>{Date.now()}</Moment></Typography>
        </Box>
        <Box sx={{width:"50%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",marginLeft:"1vw",marginBottom:"2vh"}}>
          <Box sx={{display:'flex',alignItems:"center"}}>
            <Typography variant="p" sx={{fontSize:{xs:"14px",md:"18px"}}}>Status : </Typography>
            <Typography variant="h6" sx={{fontSize:{xs:"16px",md:"18px"}}}>PENDING</Typography>
          </Box>
          <Button onClick={()=>navigator(`/order/${data.order_id}`)} variant="contained" ><Typography variant="h6" sx={{fontSize:{xs:"14px",md:"18px"}}}>Get Details</Typography></Button>
          
        </Box>
      </AccordionSummary>
      {!loading && <AccordionDetails>
        {orderData.map(a=>(
          <Box>
          <Divider />
            <Box sx={{padding :"2vh 1vw",width:"50%",display:"flex",flexDirection:{xs:"column",md:"row"},width:"90%",alignItems:"center",justifyContent:"space-between"}}>
              <Typography variant="h6" color="primary.main">{a.name}</Typography>
              <Typography>Price : BDT {a.totalprice}</Typography>
              <Typography>Qty : {a.quantity}</Typography>
            </Box>
        </Box>
      ))}
      <Divider />
      <Box sx={{padding :"2vh 1vw",width:"50%",display:"flex",flexDirection:{xs:"column"},width:"90%",alignItems:"flex-start",justifyContent:"space-between"}}>
              <Typography variant="h6" >Delivering to : </Typography>
              <Typography >Wholesaler # 4523</Typography>
              <Typography >Adam Warehouse</Typography>
              <Typography>Dhanmondi, Dhaka</Typography>
             
      </Box>
      <Button onClick={()=>markAsDelivered()} variant="contained" ><Done/><Typography variant="h6" sx={{fontSize:{xs:"14px",md:"18px"},marginLeft:"1vw"}}>Mark As delivered</Typography></Button>
      </AccordionDetails>}
      {loading && <CircularProgress/>}
  
    </Accordion>
  )
}
