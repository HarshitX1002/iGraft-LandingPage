import { Container, Card, Typography, List, ListItem } from '@mui/material'
import React from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';



const MiddleData = () =>
{
  return (
    <Container sx={{}}>
      <Typography sx={{ fontSize: 30 }}>hydra facial treatments</Typography>
      <Typography variant="body2" color="text.secondary">dermat-customized & non-invasive facial for optimal skin rejuvenation</Typography>
      <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 1, }}>

        <Card sx={{ marginTop: 5, marginBottom: 5, marginRight: 10, border: 1, maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="/FB_LHR_desktop_f5854a7360_b847a9d033.webp"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Hydra facial
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get 3 times glow and hydration with personalised clinical facial treatment
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ marginTop: 5, marginBottom: 5, border: 1, maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="/FB_LHR_desktop_f5854a7360_b847a9d033.webp"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                For brides to be
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get the bridal glow you always wished for your special day
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ marginLeft: 10, marginTop: 5, marginBottom: 5, border: 1, maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="/FB_LHR_desktop_f5854a7360_b847a9d033.webp"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Why Hydra facial
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <List>
                  <ListItem>1. 3x longer lasting results </ListItem>
                  <ListItem>2. 8 step tool based treatment and further enhance skin </ListItem>
                  <ListItem>3. FDA approved Technology and laser treatment</ListItem>
                </List>

              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
      <Typography sx={{ fontSize: 30 }}>dermafacial treatments</Typography>
      <Typography variant="body2" color="text.secondary">dermatologist- designed facials using new-age technology to elevate your skincare game</Typography>

      <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 1, }}>

        <Card sx={{ marginTop: 5, marginBottom: 5, marginRight: 10, border: 1, maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="/FB_LHR_desktop_f5854a7360_b847a9d033.webp"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                oil control facial
              </Typography>
              <Typography variant="body2" color="text.secondary">
                eliminate excess oil and grease from your skin with our tool-based oil control facial
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ marginTop: 5, marginBottom: 5, border: 1, maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="/FB_LHR_desktop_f5854a7360_b847a9d033.webp"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                instant glow facial
              </Typography>
              <Typography variant="body2" color="text.secondary">
                instantly rejuvenates and brightens the skin for a radiant glow
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ marginLeft: 10, marginTop: 5, marginBottom: 5, border: 1, maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="/FB_LHR_desktop_f5854a7360_b847a9d033.webp"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ultra hydrating facial
              </Typography>
              <Typography variant="body2" color="text.secondary">
                deeply moisturizes and nourishes the skin for a hydrated healthy appearance
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>

    </Container>

  )
}

export default MiddleData