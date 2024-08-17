import { Container, Typography, Box } from '@mui/material'
import React from 'react'

const Upper3 = () =>
{
    return (
        <Container sx={{ backgroundColor: "#a9d6e5", marginBottom: 1, marginTop: 1, border: 0, padding: { xs: 2, sm: 4, md: 6 }, width: "100vw" }}>
            <Box sx={{ width: { xs: '100%', sm: '80%', md: '60%', lg: '50%' } }}>
                <Typography sx={{ color: "#ba181b", marginLeft: 10, fontSize: 40, fontWeight: "bold", }}>
                    Why iGraft is different?
                </Typography>
                <Typography sx={{ marginLeft: 10, variant: "body2", color: "text.secondary", fontWeight: "bold", }}>
                    6 reasons to try us out
                </Typography>
            </Box>

            <Box sx={{ marginTop: 5, marginBottom: 10, marginLeft: 10, marginRight: 10, display: 'grid', gridTemplateColumns: { xs: 'repeat(auto-fit, minmax(100px, 1fr))', sm: 'repeat(auto-fit, minmax(150px, 1fr))', }, gap: 2, flexWrap: 'wrap' }}>
                <Typography sx={{ width: '50%', fontSize: 30, fontWeight: 'bold' }}>
                    <img
                        src="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
                        alt="Rounded"
                        style={{ alignItems: "center", borderRadius: '50%', width: '110px', height: '100px' }}
                    >
                    </img>
                    convenient service
                    <Typography sx={{}} > Get our services at the nearest Experience Centre or let us come to your home.</Typography>
                </Typography>
                <Typography sx={{ width: '50%', fontSize: 30, fontWeight: 'bold' }}>
                    <img
                        src="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
                        alt="Rounded"
                        style={{ alignItems: "center", borderRadius: '50%', width: '110px', height: '100px' }}
                    >
                    </img>
                    backed by experts
                    <Typography sx={{}} > Our products and services are designed and approved by dermats </Typography>
                </Typography>
                <Typography sx={{ width: '50%', fontSize: 30, fontWeight: 'bold' }}>
                    <img
                        src="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
                        alt="Rounded"
                        style={{ alignItems: "center", borderRadius: '50%', width: '110px', height: '100px' }}
                    >
                    </img>
                    latest technology
                    <Typography sx={{}}>The most advanced in India</Typography>
                </Typography>
            </Box>
            <Box sx={{ marginTop: 5, marginBottom: 10, marginLeft: 10, marginRight: 10, display: 'grid', gridTemplateColumns: { xs: 'repeat(auto-fit, minmax(100px, 1fr))', sm: 'repeat(auto-fit, minmax(150px, 1fr))', }, gap: 2, flexWrap: 'wrap' }}>
                <Typography sx={{ width: '50%', fontSize: 30, fontWeight: 'bold' }}>
                    <img
                        src="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
                        alt="Rounded"
                        style={{ alignItems: "center", borderRadius: '50%', width: '110px', height: '100px' }}
                    >
                    </img>
                    personalised care
                    <Typography sx={{}} > Designed for you and your skin</Typography>

                </Typography>
                <Typography sx={{ width: '50%', fontSize: 30, fontWeight: 'bold' }}>
                    <img
                        src="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
                        alt="Rounded"
                        style={{ alignItems: "center", borderRadius: '50%', width: '110px', height: '100px' }}
                    >
                    </img>
                    easy on the pocket
                    <Typography sx={{}} > Enjoy affordable packages and EMI options. </Typography>
                </Typography>
                <Typography sx={{ width: '50%', fontSize: 30, fontWeight: 'bold' }}>
                    <img
                        src="/iGraft-landingpage/FB_LHR_desktop_f5854a7360_b847a9d033.jpg"
                        alt="Rounded"
                        style={{ alignItems: "center", borderRadius: '50%', width: '110px', height: '100px' }}
                    >
                    </img>
                    always available
                    <Typography sx={{}} > Our team is one call away</Typography>
                </Typography>
            </Box>
        </Container>
    )
}

export default Upper3