import { Modal, Paper,Stepper ,InputLabel,StepLabel,Step,Box,Select,MenuItem, Typography,TextField, Button, IconButton} from '@mui/material'
import React,{useState} from 'react'
import {Close} from '@mui/icons-material';
import axios from 'axios';

export default function CreateProductModal(props) {
  const [name,setName]=useState(null)
  const [type,setType]=useState(null)
  const [intensity,setIntensity]=useState(null)
  const [brand,setBrand]=useState(null)
  const [image,setImage]=useState("https://i.postimg.cc/Zn02N8NR/Shades-of-Blue-Perspective-Reminder-Quote-Instagram-Post.png")
  const [factoryId,setFactoryId]=useState(123)
  const [category,setCategory]=useState(null)
  const [chemicalName,setChemicalName]=useState(null)
  const [price,setPrice]=useState(null)
  const [bestBefore,setBestBefore]=useState(null)

  const [indications,setIndications]=useState(null)
  const [pharmacology,setPharmacology]=useState(null)
  const [dosage,setDosage]=useState(null)
  const [adminstration,setAdminstration]=useState(null)
  const [interaction,setInteraction]=useState(null)
  const [sideEffect,setSideEffect]=useState(null)
  const [precautions,setPrecautions]=useState(null)
  const [storage,setStorage]=useState(null)




  const [activeStep,setActiveStep]=useState(0)
  const handleStepNext=()=>{
    setActiveStep(prev=>prev+1)
  }
  const handleStepPrev=()=>{
    setActiveStep(prev=>prev-1)
  }
  // const uploadImage=()=>{
  //   imgbbUploader("cd061de69ab64d40b4ab9441c66c57df", image)
  //   .then((response) => console.log(response))
  //   .catch((error) => console.error(error));
  // }
  const baseURL="https://cargon-postgres.herokuapp.com"
  const formURL=`${baseURL}/product/${factoryId}`
  const submitForm =()=>{
    axios.post(formURL,{
        name,
        "variant":type,
        intensity,
        brand,
        image,
        category,
        chemicalName,
        factoryId,
        price,
        bestBefore,
        indications,
        pharmacology,
        dosage,
        adminstration,
        interaction,
        sideEffect,
        precautions,
        storage
      
    }).then(()=>{
      alert("Successfully Added Product")
      navigator("/products")
    })
    .catch(()=>{
      alert("Adding product failed")
      navigator("/products")
  })
  }












  return (
    <Modal open={props.open} sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <Paper elevation={6} sx={{position:"relative",width:"80vw",minHeight:"80vh",overflowY:"scroll",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <Box sx={{position:"absolute",top:"10px",right:"10px"}}><IconButton onClick={()=>props.setOpen(false)}><Close color="primary"/></IconButton></Box>
          <Box sx={{margin:"2vh 0"}}>
              <Typography variant="h5" color="primary.main" >Create a product</Typography>
          </Box>
          <Stepper activeStep={activeStep} alternativeLabel sx={{width:"80%"}}>
              <Step key={1} ><StepLabel>"Basic Information"</StepLabel></Step>
              <Step key={2} activeStep><StepLabel>"Details"</StepLabel></Step>
              <Step key={3}><StepLabel>"Confirmation"</StepLabel></Step>
            
          </Stepper>
          
          {/** BASIC INFO */}
          {activeStep==0 && <Box sx={{width:"80%",margin:"2vh 0"}}>
            <InputLabel>Name</InputLabel>
            <TextField variant="outlined" value={name} fullWidth onChange={e=>{
              setName(e.target.value)
              console.log(name)
            }} />
            <InputLabel>Variant</InputLabel>
            <Select
              label="Hello"
              fullWidth
              variant='outlined'
              onChange={e=>setType(e.target.value)}
              value={type}
            >
              <MenuItem value={"Capsule"}>Capsule</MenuItem>
              <MenuItem value={"Syrup"}>Syrup</MenuItem>
              <MenuItem value={"Tablet"}>Tablet</MenuItem>
              <MenuItem value={"Ointment"}>Ointment</MenuItem>
              <MenuItem value={"Liquid"}>Liquid</MenuItem>
              <MenuItem value={"Injection"}>Injection</MenuItem>
              <MenuItem value={"Oral Solution"}>Oral Solution</MenuItem>
              <MenuItem value={"Supository"}>Supository</MenuItem>
              <MenuItem value={"Eye Drop"}>Eye Drop</MenuItem>
            </Select>
            <InputLabel>Intensity</InputLabel>
            <TextField variant="outlined" fullWidth value={intensity} onChange={e=>setIntensity(e.target.value)} />
            <InputLabel>Brand</InputLabel>
            <TextField variant="outlined" fullWidth value={brand} onChange={e=>setBrand(e.target.value)} />
            <InputLabel>Image </InputLabel>
            <TextField  variant="outlined" fullWidth value={image} onChange={e=>setImage(e.target.value)}/>
            <InputLabel>Category</InputLabel>
            <TextField  variant="outlined" fullWidth value={category} onChange={e=>setCategory(e.target.value)} />
            <InputLabel>Chemical Name</InputLabel>
            <TextField variant="outlined" fullWidth value={chemicalName} onChange={e=>setChemicalName(e.target.value)} />
            <InputLabel>Unit Price</InputLabel>
            <TextField  type="number" variant="outlined" value={price} fullWidth onChange={e=>setPrice(e.target.value)} />
            <InputLabel>Best Before</InputLabel>
            <TextField  type="date" variant="outlined" fullWidth value={bestBefore} onChange={e=>setBestBefore(e.target.value)} />

            <Box sx={{margin:"2vh 0",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <Button variant="contained" sx={{margin:"0 1vw"}} onClick={()=>props.setOpen(false)}><Typography>Cancel</Typography></Button>
              <Button variant="contained" sx={{margin:"0 1vw"}} onClick={handleStepNext}><Typography>Next</Typography></Button>
              
            </Box>
          </Box>}

          {/** DETAILED INFO */}
          {activeStep==1 && <Box sx={{width:"80%",margin:"2vh 0"}}>
            <InputLabel>Indications</InputLabel>
            <TextField variant="outlined" fullWidth value={indications} onChange={e=>setIndications(e.target.value)} />
            <InputLabel>Pharmacology</InputLabel>
            <TextField variant="outlined" fullWidth value={pharmacology} onChange={e=>setPharmacology(e.target.value)} />
            <InputLabel>Dosage</InputLabel>
            <TextField variant="outlined" fullWidth value={dosage} onChange={e=>setDosage(e.target.value)} />
            <InputLabel>Adminstration</InputLabel>
            <TextField variant="outlined" fullWidth value={adminstration} onChange={e=>setAdminstration(e.target.value)} />
            <InputLabel>Interaction</InputLabel>
            <TextField variant="outlined" fullWidth value={interaction} onChange={e=>setInteraction(e.target.value)} />
            <InputLabel>Side Effects</InputLabel>
            <TextField variant="outlined" fullWidth value={sideEffect} onChange={e=>setSideEffect(e.target.value)} />
            <InputLabel>Precautions and Warnings </InputLabel>
            <TextField variant="outlined" fullWidth value={precautions} onChange={e=>setPrecautions(e.target.value)} />
            <InputLabel>Storage Conditions</InputLabel>
            <TextField variant="outlined" fullWidth value={storage} onChange={e=>setStorage(e.target.value)} />
            

            <Box sx={{margin:"2vh 0",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <Button variant="contained" sx={{margin:"0 1vw"}} onClick={handleStepPrev}><Typography>Previous</Typography></Button>
              <Button variant="contained" sx={{margin:"0 1vw"}} onClick={handleStepNext}><Typography>Next</Typography></Button>
              
            </Box>
          </Box>}
          {/** REVIEW INFO */}
          {activeStep==2 && 
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"90%"}}>
            
            <Box sx={{width:"80%",margin:"2vh 0",height:"60vh",overflowY:"scroll"}}>
          <Box sx={{ marginTop: { xs: "7vh", md: "6.5vh" } }}>
          <Box sx={{display:"flex",alignItems:"flex-end"}}>
            <Typography variant="h4" sx={{marginRight:"1rem"}} color="primary.main">{name}</Typography>
            <Typography variant="p">{type}</Typography>
          </Box>
          <Box sx={{display:"flex",flexDirection:"column"}}>
            <Typography variant="p" sx={{marginRight:"1rem",fontWeight:500}} color="primary.dark">{chemicalName}</Typography>
            <Typography variant="p" sx={{marginRight:"1rem",fontWeight:400}} >{intensity}</Typography>
            <Typography variant="p" sx={{marginRight:"1rem",fontWeight:400}} >{brand}</Typography>
          </Box>
          <Box sx={{display:"flex",flexDirection:"column"}}>
            <Typography variant="p" sx={{marginRight:"1rem",fontWeight:400}} color="primary.dark">Unit Price : {price} BDT</Typography>
          </Box>
          {/**INDICATIONS */}
          <Box>
            <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
              <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Indications</Typography>
            </Box>
            <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{indications}</Typography>
          </Box>
          {/**Pharmacology */}
          <Box>
            <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
              <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Pharmacology</Typography>
            </Box>
            <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{pharmacology}</Typography>
          </Box>
          {/**Dosage */}
          <Box>
            <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
              <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Dosage</Typography>
            </Box>
            <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{dosage}</Typography>
          </Box>
          {/**Adminstration */}
          <Box>
            <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
              <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Adminstration</Typography>
            </Box>
            <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{adminstration}</Typography>
          </Box>
          {/**Interaction */}
          <Box>
            <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
              <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Interaction</Typography>
            </Box>
            <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{interaction}</Typography>
          </Box>
          {/**Side Effects */}
          <Box>
            <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
              <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Side Effects</Typography>
            </Box>
            <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{sideEffect}</Typography>
          </Box>
          {/**Precautions and warnings */}
          <Box>
            <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
              <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Precautions and warnings</Typography>
            </Box>
            <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{precautions}</Typography>
          </Box>
          {/**Storage Conditions */}
          <Box>
            <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
              <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Storage Conditions</Typography>
            </Box>
            <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{storage}</Typography>
          </Box>
        </Box>
        
          </Box>
          <Box sx={{margin:"2vh 0",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Button variant="contained" sx={{margin:"0 1vw"}} onClick={handleStepPrev}><Typography>Previous</Typography></Button>
        <Button variant="contained" sx={{margin:"0 1vw"}} onClick={()=>{
          //console.log(name,image)
          submitForm()
          props.setOpen(false)
        }}><Typography>Confirm</Typography></Button>
        
      </Box>
          
          </Box>}
          
      </Paper>
    
    </Modal>
  )
}
