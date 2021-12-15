import MultiActionAreaCard from '../components/shoelist'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import shoeinfo from '../pages/api/shoedata';
export default function Gridshoe() {

const shoegridElements = shoeinfo.map((shoegrid, index) => {
  return <Grid item xs={3}>
  <MultiActionAreaCard key={index} shoegrid={shoegrid}/>
  </Grid> 

})
      return (
      
        <div >
          <br/>
          <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" max>
        
          <Box sx={{ bgcolor: '#FEF9EF', height: '100vh' }} >
          <Grid container spacing={3}>
          {shoegridElements}
        </Grid>
            </Box>
        </Container>
      </React.Fragment>
           
        </div>
        
      )
      
    
    }