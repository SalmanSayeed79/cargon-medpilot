import { AddAPhoto, ArrowForward, AssignmentInd, ExpandMore, Group, Man, Pending, SwipeRight } from '@mui/icons-material';
import { Paper,Stepper,Step,StepLabel,Accordion,Divider,AccordionSummary,AccordionDetails,Box, Typography, StepContent, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import { useNavigate } from 'react-router-dom';
export default function OrderDetailsCard({data}) {
  const navigator=useNavigate()
  const [activeStep,setActiveStep]=useState(2)

  return (
    <Paper sx={{width:"100%",minHeight:"12vh",margin:"2vh 0",display:"flex",flexDirection:"column"}} elevation={3}>
      
        <Box sx={{width:"50%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginLeft:"1vw",margin:"2vh 2vw"}}>
          <Typography variant="h6">Order # {data.order_id}</Typography>
          <Typography variant="p"><Moment format="D MMM YYYY , HH:MM" withTitle>{Date.now()}</Moment></Typography>
          <Typography color="success.main">Esitmated Delivery on <Moment format="D MMM" withTitle>{Date.now()}</Moment></Typography>
        </Box>
      
        <Divider />
        <Box sx={{padding :"2vh 0",width:"50%",margin:"2vh 2vw"}}>
          <Typography variant="h6" color="primary.main">ACI ORS Saline</Typography>
          <Typography>Price : 500tk</Typography>
          <Typography>Qty : 100</Typography>
        
        </Box>

        <Divider />
        <Box>
        <Typography variant="h6" sx={{margin:"0 2vw"}}>Track Order</Typography>
        </Box>

        <Stepper activeStep={activeStep} orientation="vertical" sx={{width:"80%",margin:"2vh 2vw"}}>
              <Step key={1} expanded={activeStep>0}>
                <StepLabel >
                  <Box sx={{display:"flex",alignItems:"center"}}>
                    <SwipeRight sx={{backgroundColor:"warning.main",color:"white",padding:"10px",borderRadius:"50%",margin:"0 1vw"}} />
                  <Typography variant="h6">Order Placed</Typography>
                  </Box>
                </StepLabel>
                <StepContent>
                  <Typography sx={{marginLeft:"1vw"}}>We have received the order</Typography>
                  </StepContent>
              </Step>

              <Step key={2} expanded={activeStep>1}>
                <StepLabel >
                  <Box sx={{display:"flex",alignItems:"center"}}>
                    <Pending sx={{backgroundColor:"warning.main",color:"white",padding:"10px",borderRadius:"50%",margin:"0 1vw"}} />
                  <Typography variant="h6">Order Assigned</Typography>
                  </Box>
                </StepLabel>
                <StepContent>
                  <Typography sx={{marginLeft:"1vw"}}>We have assigned the order to a designated distributor</Typography>
                  </StepContent>
              </Step>

              <Step key={3} expanded={activeStep>2}>
                <StepLabel>
                  <Box sx={{display:"flex",alignItems:"center"}}>
                    <AssignmentInd sx={{backgroundColor:"success.main",color:"white",padding:"10px",borderRadius:"50%",margin:"0 1vw"}} />
                  <Typography variant="h6">Reached Wholesaler</Typography>
                  </Box>
                </StepLabel>
                <StepContent>
                  <Typography sx={{marginLeft:"1vw"}}>Our product has reached the warehouse of our partner wholesalers</Typography>
                  </StepContent>
              </Step>

              <Step key={4} expanded={activeStep>3}>
                <StepLabel>
                  <Box sx={{display:"flex",alignItems:"center"}}>
                    <Group sx={{backgroundColor:"success.main",color:"white",padding:"10px",borderRadius:"50%",margin:"0 1vw"}} />
                  <Typography variant="h6">Reached retailer</Typography>
                  </Box>
                </StepLabel>
                <StepContent>
                  <Typography sx={{marginLeft:"1vw"}}>Our product has reached retailers</Typography>
                  </StepContent>
              </Step>

              <Step key={5} expanded={activeStep>4}>
                <StepLabel>
                  <Box sx={{display:"flex",alignItems:"center"}}>
                    <Man sx={{backgroundColor:"success.main",color:"white",padding:"10px",borderRadius:"50%",margin:"0 1vw"}} />
                  <Typography variant="h6">Product Bought</Typography>
                  </Box>
                </StepLabel>
                <StepContent>
                  <Typography sx={{marginLeft:"1vw"}}>The product has been bought by a consumer</Typography>
                  </StepContent>
              </Step>

             
            
          </Stepper>
  
  
    </Paper>
  )
}
