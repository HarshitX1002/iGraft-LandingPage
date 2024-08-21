import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

const LoginPopup = ({ open, onClose }) =>
{
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                    Login
                </Typography>
                <TextField
                    fullWidth
                    label="Username"
                    variant="outlined"
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </Box>
        </Modal>
    );
};

export default LoginPopup;