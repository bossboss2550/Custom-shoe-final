import MultiActionAreaCard from '../components/shoelist'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import shoeinfo from '../pages/api/shoedata';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { Link } from '@mui/material';
import { useUser } from '../auth/useUser'
import Swal from "sweetalert2";
import { useRouter } from 'next/router';

export default function Gridshoe() {
  const router = useRouter()
  const { user } = useUser()
  const handleUpload = () => {
    if (user) {
      router.push('/Custom')
    } else {
      Swal.fire({
        title: "Error",
        text: "กรุณาเข้าสู่ระบบก่อน",
        icon: "error",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",

      })
    }
  }
  const shoegridElements = shoeinfo.map((shoegrid, index) => {
    return <Grid item xs={3} key={index}>
      <MultiActionAreaCard shoegrid={shoegrid} />
    </Grid>
  })
  return (

    <div >
      <br />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" max>

          <Box sx={{ bgcolor: '#FEF9EF', height: '0px', }} >
            <Grid container spacing={3}>
              {shoegridElements}
              <Link>
                <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
                  <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: -180, right: -200 }}
                    icon={<SpeedDialIcon />}
                    onClick={handleUpload}
                  >
                  </SpeedDial>
                </Box>
              </Link>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>

    </div>

  )


}