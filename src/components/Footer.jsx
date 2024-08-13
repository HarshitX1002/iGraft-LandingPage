import { Container, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Footer = () =>
{
  return (
    <Container sx={{ marginTop: 1, border: 1, display: 'grid', rowGap: 1, gridTemplateColumns: 'repeat(6 ,1fr)' }}>
      <Typography>iGraft</Typography>
      <Typography>Company
        <List>
          <ListItemText>
            About us
          </ListItemText>
          <ListItemText>
            About us
          </ListItemText>
          <ListItemText>
            About us
          </ListItemText>
          <ListItemText>
            About us
          </ListItemText>
          <ListItemText>
            About us
          </ListItemText>

        </List>
      </Typography>
      <Typography>iGraft Service
        <List>
          <ListItemText>
            About us
          </ListItemText>
          <ListItemText>
            About us
          </ListItemText>
          <ListItemText>
            About us
          </ListItemText>
          <ListItemText>
            About us
          </ListItemText>
          <ListItemText>
            About us
          </ListItemText>

        </List>
      </Typography>
      <Typography>iGraft Skin
        <List>
          <ListItemText>
            About us
          </ListItemText>
          <ListItemText>
            About us
          </ListItemText>
          <ListItemText>
            About us
          </ListItemText>
          <ListItemText>
            About us
          </ListItemText>
          <ListItemText>
            About us
          </ListItemText>

        </List>
      </Typography>
      <Typography>Policies
        <List>
          <ListItemText>
            About us
          </ListItemText>
          <ListItemText>
            About us
          </ListItemText>
          <ListItemText>
            About us
          </ListItemText>
        </List>
      </Typography>
      <Typography>download App</Typography>
    </Container>
  )
}

export default Footer