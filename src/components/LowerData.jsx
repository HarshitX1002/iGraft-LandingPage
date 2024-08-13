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
    <Container sx={{ marginTop: 1, border: 1 }}>
      <Typography fontSize={35} textAlign={'center'}>
        More of you
        <Typography fontSize={20}>
          Stories about skin, skincare and you. Enjoy the show!
        </Typography>
      </Typography>
      <Box sx={{ marginBottom: 1, border: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <Card sx={{ marginLeft: 1, marginTop: 1, marginBottom: 1, border: 1, maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Laser hair removal myths, BUSTED!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Laser hair removal is grabbing the eyeballs gradually, now becoming a popular method of hair removal. As with any new technology
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ marginRight: 1, marginTop: 1, marginBottom: 1, border: 1, maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tired of Acne Popping Up on Your Face? Read About These Types of Acne
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Are you tired of acne popping up on your face right before a party? Do you also look for different hacks on the internet to hide them?
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
      <Box sx={{ marginBottom: 1, border: 1 }}>
        <Typography textAlign={'center'} gutterBottom variant="h5">
          what are you waiting for?
          <Typography variant="body1" color="text.secondary" >
            earn per referral upto
          </Typography>
          <Typography fontWeight={'bold'}>₹4500 in cash rewards</Typography>
        </Typography>
      </Box>



    </Container>
  )
}

export default LowerData