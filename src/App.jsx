import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)
  const handleClickButton=(e)=>{
    console.log('button clicked',e.target.value);
    setCount([...count,e.target.value]);
  }
  const handleChange=(e)=>{

  }

  return (
    <>
      <header><Typography variant='h2' align='center'>React Calculator</Typography></header>
      <Box display='flex' justifyContent='center' mb={2}>
        <TextField variant='outlined' value={count} onChange={handleChange}  inputProps={{readOnly:true, style:{textAlign:'center'}}}/>
      </Box>
      <Typography align='center' mb={2}>
        Result is here : {count}
      </Typography>
      
      <Box className="container" style={{ textAlign: 'center', maxWidth: '300px', margin: 'auto' }}>
     <Grid container spacing={1}>
      {['7','8','9','+','4','5','6','-','1','2','3','*','C','0','=','/'].map((num)=>(
        <Grid item xs={4} md={4} key={num}>
          <Button fullWidth value={num} variant='contained' color='primary' onClick={handleClickButton}>{num}</Button>
        </Grid>     ))}
      

      </Grid>
      
     </Box> 
    </>
  )
}

export default App
