import { Box, Container, tableBodyClasses } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const LowerData = () =>
{
  return (
    <Container sx={{ marginTop: 1, border: 0, flexWrap: "wrap" }}>
      <Typography color="#ba181b" fontSize={35} textAlign={'center'} fontWeight="bold">
        More of you
        <Typography color="#8b8c89" fontSize={20}>
          Stories about skin, skincare and you. Enjoy the show!
        </Typography>
      </Typography>
      <Box sx={{
        marginTop: 2, marginBottom: 5, border: 0, display: 'grid', gridTemplateColumns: {
          xs: '1fr',       // 1 column on extra-small screens
          sm: 'repeat(1, 1fr)', // 2 columns on small screens
          md: 'repeat(2, 1fr)', // 3 columns on medium screens
          lg: 'repeat(2, 1fr)', // 4 columns on large screens
        }, flexWrap: "wrap"
      }}>
        <Card sx={{ marginLeft: 1, marginTop: 1, marginBottom: 1, border: 1, maxWidth: 500, display: "flex", borderRadius: '16px' }}>
          <CardMedia
            component="img"
            sx={{ width: 250 }}
            image="/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
            alt="Placeholder Image"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Laser hair removal myths, BUSTED!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Laser hair removal is grabbing the eyeballs gradually, now becoming a popular method of hair removal. As with any new technology
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Card sx={{ marginRight: 1, marginTop: 1, marginBottom: 1, border: 1, maxWidth: 500, display: "flex", borderRadius: '16px' }}>
          <CardMedia
            component="img"
            sx={{ width: 250 }}
            image="/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
            alt="Placeholder Image"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tired of Acne Popping Up on Your Face? Read About These Types of Acne
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Are you tired of acne popping up on your face right before a party? Do you also look for different hacks on the internet to hide them?
              </Typography>
            </CardContent>
          </Box>
        </Card>


      </Box>

      <Box sx={{ backgroundColor: "#caf0f8", marginBottom: 5, border: 1, padding: 10, borderRadius: "16px", }}>
        <Typography fontSize={40} textAlign={'center'} gutterBottom variant="h5" fontWeight="bold" >
          what are you waiting for?
          <Typography variant="body1" color="text.secondary" >
            earn per referral upto
          </Typography>
          <Typography fontWeight={'bold'}>₹4500 in cash rewards</Typography>
        </Typography>
      </Box>



    </Container >
  )
}

export default LowerData