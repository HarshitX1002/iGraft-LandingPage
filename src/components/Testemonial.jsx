import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import StarIcon from '@mui/icons-material/Star';



export const Testemonial = () =>
{
  return (
    <Container sx={{ border: 0, padding: 1 }}>
      <Typography color="#ba181b" fontSize={40} fontWeight="bold" textAlign='center'> Love letters
        <Typography marginBottom={2} color="#8b8c89" fontSize={20} textAlign='center'>
          Sweet clients. Sweeter testimonials.
        </Typography>
      </Typography>

      <Box sx={{ margin: 1, marginBottom: 10, display: "center", justifyContent: "center" }}>
        <Card sx={{ border: 1, borderRadius: "16px", maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rashi Singh
            </Typography>
            <Typography variant="body2" color="text.secondary">
              My therapist Jyoti Vishwakarma, was very helpful and informative during the whole session, before coming in my house she always wears a pp kit, and makes sure to clean and sanitise the machine and tools before and after the session.
            </Typography>
            <Box sx={{ padding: 1 }}>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
            </Box>
          </CardContent>

        </Card>
        <Card sx={{ border: 1, marginLeft: 5, marginRight: 5, borderRadius: "16px", maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Suman K
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I totally loved the service. It was my first session with makeO and I loved how professional they are. Leela, made sure I was comfortable at all times and answered all my questions so well.
            </Typography>
            <Box sx={{ padding: 1 }}>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
            </Box>

          </CardContent>

        </Card>
        <Card sx={{ border: 1, borderRadius: "16px", maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Anusha R
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Absolutely love the treatment! amazing results, super hygienic and very kind counselors and therapists! My therapist Bhavna Tyagi was very professional and explained the whole process and made me feel very comfortable ! 10/10 would recommend!!
            </Typography>
            <Box sx={{ padding: 1 }}>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
              <StarIcon sx={{ color: "#edc531" }}></StarIcon>
            </Box>
          </CardContent>

        </Card>

      </Box>
    </Container >
  )
}
