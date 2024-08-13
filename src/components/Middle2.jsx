import { Container, Grid, Typography, Box, } from '@mui/material'
import React from 'react'
import photo1 from { photo1 }


const Middle2 = () =>
{
  return (
    <>
      <Container sx={{ padding: 1, marginBottom: 5 }}>
        <Typography color='#ba181b' fontSize={50} textAlign='center' fontWeight={'bold'}>
          How iGraft work

        </Typography>
        <Grid sx={{ border: 0, marginTop: 2, marginBottom: 5, padding: 5, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            padding={2}>
            <img
              src={photo1}
              alt="Rounded"
              style={{ alignItems: "center", borderRadius: '10%', width: '110px', height: '100px' }}
            >
            </img>
            <Typography fontSize={30} color="#495057">

              Self Assessment
              <Typography fontSize={16} color="text.secondary">
                Answer our medical survey for our experts
              </Typography>
            </Typography>

          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            padding={2}
            marginBottom={3}>

            <img
              src={photo1}
              alt="Rounded"
              style={{ alignItems: "center", borderRadius: '10%', width: '110px', height: '100px' }}
            >
            </img>
            <Typography fontSize={30} color="#495057">
              Appointment
              <Typography fontSize={16} color="text.secondary">
                Book you appointments
              </Typography>
            </Typography>

          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            padding={2}>
            <img
              src={photo1}
              alt="Rounded"
              style={{ alignItems: "center", borderRadius: '10%', width: '110px', height: '100px' }}
            >
            </img>

            <Typography fontSize={30} color="#495057">
              Sessions Start
              <Typography fontSize={16} color="text.secondary">
                Dermat trained iGraft pros deliever the session
              </Typography>
            </Typography>

          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            padding={2}>
            <img
              src={photo1}
              alt="Rounded"
              style={{ alignItems: "center", borderRadius: '10%', width: '110px', height: '100px' }}
            >
            </img>

            <Typography fontSize={30} color="#495057">
              Post-treatment care
              <Typography width='auto' fontSize={16} color="text.secondary">
                We guide and follow up till you recover completely
              </Typography>
            </Typography>

          </Box>
        </Grid>
        <Box sx={{ backgroundColor: "#caf0f8", border: 1, borderRadius: '16px', marginTop: 20, marginBottom: 10, padding: 11 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Typography sx={{ color: "#595959", margin: 1 }} fontSize={30} fontWeight={'bold'}>
              Skincare is self-care.
              so we made it affordable.
              EMI always helps

            </Typography>
            <Typography sx={{ color: "#595959", margin: 1 }} fontSize={30} fontWeight={'bold'}>
              Starting from Rs 330 per month

            </Typography>
          </Box>

        </Box>
      </Container>


    </>




  )
}

export default Middle2