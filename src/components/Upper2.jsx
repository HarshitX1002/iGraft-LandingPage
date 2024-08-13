import { Box, Container, Typography, Button } from '@mui/material'
import React from 'react'

const Upper2 = () =>
{
  return (
    <Box sx={{ backgroundColor: '#ebebd3', border: 0, padding: 1, marginBottom: 1 }}>
      <Container sx={{ backgroundColor: '#a9d6e5', borderRadius: 5, border: 1, marginTop: 10, marginBottom: 10 }}>
        <Button sx={{ color: 'text.primary', marginTop: 1 }}>Refer a friend </Button>
        <Typography sx={{ marginTop: 3, marginBottom: 10, fontSize: 30 }}>
          Share your iGraft with your friends & family now !
        </Typography>
      </Container>
    </Box>
  )
}

export default Upper2