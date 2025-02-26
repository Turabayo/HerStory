import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Paper, Container } from '@mui/material';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(formData);
            localStorage.setItem('token', response.user._id);
            alert('Login successful!');
            navigate('/dashboard');
        } catch (error) {
            alert('Error logging in');
            console.error(error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: '20px', marginTop: '40px' }}>
                <Typography variant="h4" component="h1" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
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
                        Login
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;