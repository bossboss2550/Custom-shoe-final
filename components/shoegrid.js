import MultiActionAreaCard from '../components/shoelist'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function Gridshoe() {

      
      return (
        <div >
          <br/>
          <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
        
          <Box sx={{ bgcolor: '#FEF9EF', height: '100vh' }} >
          <Grid container spacing={3}>
          <Grid item xs={3}>
          <MultiActionAreaCard/>
          </Grid>
        </Grid>
            </Box>
        </Container>
      </React.Fragment>
           
        </div>
        
      )
      
    
    }