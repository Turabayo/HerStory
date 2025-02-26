import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Events = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px 0' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                    Events
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: '#666' }}>
                    Explore our upcoming events and join us in empowering women in tech.
                </Typography>
            </Container>
        </Box>
    );
};

export default Events;