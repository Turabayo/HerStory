import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Paper, Container } from '@mui/material';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(formData);
            alert('Registration successful!');
            navigate('/login');
        } catch (error) {
            alert('Error registering');
            console.error(error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: '20px', marginTop: '40px' }}>
                <Typography variant="h4" component="h1" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    Register
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        sx={{ marginBottom: '20px' }}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        sx={{ marginBottom: '20px' }}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        sx={{ marginBottom: '20px' }}
                        required
                    />
                    <Button type="submit" variant="contained" fullWidth>
                        Register
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Register;