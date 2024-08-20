import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Footer = () =>
{
  return (
    <Box sx={{ backgroundColor: "#e3f2fd", marginTop: 1, border: 0, paddingTop: 2, paddingBottom: 10 }}>
      <Container sx={{ display: 'grid', rowGap: 1, gridTemplateColumns: 'repeat(6 ,1fr)' }} >
        <Typography sx={{ fontWeight: "bold", color: "#6c757d" }}>iGraft</Typography>
        <Typography sx={{ color: "#6c757d" }}>Company
          <List sx={{ color: "#6c757d" }}>
            <ListItemText>
              About us
            </ListItemText>
            <ListItemText>
              Blog
            </ListItemText>
            <ListItemText>
              in the news
            </ListItemText>
            <ListItemText>
              Covid Safety
            </ListItemText>
            <ListItemText>
              careers
            </ListItemText>

          </List>
        </Typography>
        <Typography sx={{ color: "#6c757d" }}>iGraft Service
          <List>
            <ListItemText>
              aligners
            </ListItemText>
            <ListItemText>
              teens
            </ListItemText>
            <ListItemText>
              cost
            </ListItemText>
            <ListItemText>
              oral care products
            </ListItemText>
            <ListItemText>
              partner with iGraft
            </ListItemText>
            <ListItemText>
              partner clinics
            </ListItemText>
            <ListItemText>
              how iGraft works
            </ListItemText>
            <ListItemText>
              technical document
            </ListItemText>

          </List>
        </Typography>
        <Typography sx={{ color: "#6c757d" }}>iGraft Skin
          <List>
            <ListItemText>
              Laser hair reduction
            </ListItemText>
            <ListItemText>
              dermafacial
            </ListItemText>
            <ListItemText>
              acne treatment
            </ListItemText>
            <ListItemText>
              hydrafacial treatment
            </ListItemText>
            <ListItemText>
              anti ageing treatment
            </ListItemText>

          </List>
        </Typography>
        <Typography sx={{ color: "#6c757d" }}>Policies
          <List>
            <ListItemText>
              terms of us
            </ListItemText>
            <ListItemText>
              privacy policy
            </ListItemText>
            <ListItemText>
              refund policy
            </ListItemText>
          </List>
        </Typography>
        <Typography sx={{ color: "#6c757d" }}>download App</Typography>
      </Container>

    </Box>
  )
}

export default Footer