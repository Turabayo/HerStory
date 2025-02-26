import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Contact = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px 0' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                    Contact Us
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: '#666' }}>
                    Have questions or want to get involved? Reach out to us at <strong>info@herstory.com</strong>.
                </Typography>
            </Container>
        </Box>
    );
};

export default Contact;