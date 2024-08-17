import React from 'react'
import { Box, Container, Typography, Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
//flexDirection={{ xs: 'column', sm: 'row' }} // Stack vertically on xs screens, horizontally on sm and up
//p = {{ xs: 2, sm: 4 }}
const Upper1 = () =>
{
  return (
    <>
      <Box sx={{ marginTop: 40 }}>
        <Typography sx={{ fontWeight: "bold", color: 'error.main', fontSize: 30, textAlign: 'center' }}>Skin care services</Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: "center", flexWrap: 'wrap' }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            padding={2}>
            <img
              src="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
              alt="Rounded"
              style={{ alignItems: "center", borderRadius: '10%', width: '110px', height: '100px' }}
            >
            </img>
            <Typography sx={{ p: 1, m: 1 }}>
              Laser hair reduction</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            padding={2}>
            <img
              src="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
              alt="Rounded"
              style={{ alignItems: "center", borderRadius: '10%', width: '110px', height: '100px' }}
            >
            </img>
            <Typography sx={{ p: 1, m: 1 }}>
              hydrafacial</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            padding={2}>
            <img
              src="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
              alt="Rounded"
              style={{ alignItems: "center", borderRadius: '10%', width: '110px', height: '100px' }}
            >
            </img>
            <Typography sx={{ p: 1, m: 1 }}>
              dermafacial</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            padding={2}>
            <img
              src="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
              alt="Rounded"
              style={{ alignItems: "center", borderRadius: '10%', width: '110px', height: '100px' }}
            >
            </img>
            <Typography sx={{ p: 1, m: 1 }}>
              skincare products</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            padding={2}>
            <img
              src="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
              alt="Rounded"
              style={{ alignItems: "center", borderRadius: '10%', width: '110px', height: '100px' }}
            >
            </img>
            <Typography sx={{ p: 1, m: 1 }}>
              anti ageing</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            padding={2}>
            <img
              src="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
              alt="Rounded"
              style={{ alignItems: "center", borderRadius: '10%', width: '110px', height: '100px' }}
            >
            </img>
            <Typography sx={{ p: 1, m: 1 }}>
              acne treatment</Typography>
          </Box>

        </Box>
      </Box>
      <Box sx={{ backgroundColor: '#a9d6e5', marginTop: 1, marginBottom: 1, }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ display: 'inline-flex', margin: 'auto', color: 'red', fontSize: 30, }}>best selling service</Typography>
          <Typography sx={{ margin: 'auto', fontSize: 25 }}>laser hair reduction</Typography>
          <Typography sx={{ margin: 'auto', }} variant="body2" color="text.secondary">more than 2,00,000 laser sessions delivered</Typography>
        </Box>


        <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: 1, flexDirection: "row", flexWrap: 'wrap' }}>

          <Card sx={{ marginTop: 5, marginBottom: 5, border: 1, maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                length="100"
                image="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
                alt="lady image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Full body
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  keep yourself always groomed with hair free body and keep it fine
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 5, border: 1, maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Specific parts
                </Typography>
                <Typography width='100%' variant="body2" color="text.secondary">
                  Remove unwanted hair from a body part of your choice
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ marginTop: 5, marginBottom: 5, border: 1, maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Book a trial
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  not sure how laser hair reduction works? Here's your chance to experience it only for Rs 99.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Box >
    </>

  )
}

export default Upper1