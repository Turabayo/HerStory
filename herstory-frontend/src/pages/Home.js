import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, TextField } from '@mui/material';
import WomenInTechImage from './assets/women-in-tech.jpg'; // Ensure this path is correct
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            {/* Navbar */}
            <Box
                sx={{
                    backgroundColor: 'rgba(51, 51, 51, 0.8)', // Transparent background
                    color: '#fff',
                    padding: '10px 20px',
                    position: 'sticky', // Make the navbar sticky
                    top: 0,
                    zIndex: 1000, // Ensure it stays on top
                    backdropFilter: 'blur(10px)', // Add a blur effect for transparency
                }}
            >
                <Container maxWidth="lg">
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Typography variant="h6" component="div">
                            HerTechStory {/* Updated platform name */}
                        </Typography>
                        <Box>
                            <Button color="inherit" href="#home">
                                Home
                            </Button>
                            <Button color="inherit" href="#about">
                                About
                            </Button>
                            <Button color="inherit" href="#events">
                                Events
                            </Button>
                            <Button color="inherit" href="#contact">
                                Contact
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ marginLeft: '10px', backgroundColor: '#ff4081', '&:hover': { backgroundColor: '#e91e63' } }}
                                href="#get-started"
                            >
                                GET STARTED
                            </Button>
                        </Box>
                    </Grid>
                </Container>
            </Box>

            {/* Home Section */}
            <Container id="home" maxWidth="lg" sx={{ marginTop: '40px', padding: '40px 0' }}>
                <Grid container spacing={4} alignItems="center">
                    {/* Text Section (Left) */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', color: '#333' }}>
                            Empowering Women, Inspiring the Generations
                        </Typography>
                        <Typography variant="h5" component="h2" sx={{ color: '#666', marginTop: '20px' }}>
                            Capture, preserve, and place an incredible journey of women who choose Eastern Africa.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#ff4081',
                                    '&:hover': { backgroundColor: '#e91e63' },
                                    padding: '10px 30px',
                                    fontSize: '16px',
                                }}
                                href="#get-started"
                            >
                                GET STARTED
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: '#ff4081',
                                    color: '#ff4081',
                                    '&:hover': { borderColor: '#e91e63', color: '#e91e63' },
                                    padding: '10px 30px',
                                    fontSize: '16px',
                                }}
                                href="#stories"
                            >
                                Explore Our Stories
                            </Button>
                        </Box>
                    </Grid>

                    {/* Image Section (Right) */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={WomenInTechImage}
                            alt="Women in Tech"
                            sx={{
                                width: '100%',
                                borderRadius: '10px',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Our Community Impact Section */}
            <Container id="community-impact" maxWidth="lg" sx={{ marginTop: '40px', padding: '40px 0' }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                    Our Community Impact
                </Typography>
                <Grid container spacing={4}>
                    {/* 50+ Stories Shared */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold', color: '#333' }}>
                                    50+
                                </Typography>
                                <Typography variant="h6" component="h4" sx={{ color: '#666', marginTop: '10px' }}>
                                    Stories Shared
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* 10 Tech Categories */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold', color: '#333' }}>
                                    10
                                </Typography>
                                <Typography variant="h6" component="h4" sx={{ color: '#666', marginTop: '10px' }}>
                                    Tech Categories
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* 5 Countries Represented */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold', color: '#333' }}>
                                    5
                                </Typography>
                                <Typography variant="h6" component="h4" sx={{ color: '#666', marginTop: '10px' }}>
                                    Countries Represented
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            {/* About HerTechStory Section */}
            <Container id="about" maxWidth="lg" sx={{ marginTop: '40px', padding: '40px 0', backgroundColor: '#fff' }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                    About HerTechStory
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
                    Our mission is to increase women's representation in technology by providing a platform that preserves and shares their journeys, experiences, and challenges—empowering, inspiring, and guiding future generations in the field.
                </Typography>
                <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#ff4081',
                            '&:hover': { backgroundColor: '#e91e63' },
                            padding: '10px 30px',
                            fontSize: '16px',
                        }}
                        href="#about"
                    >
                        Read Our Story
                    </Button>
                </Box>
            </Container>
                        {/* Why HerTechStory Section */}

            <Container id="about" maxWidth="lg" sx={{ marginTop: '40px', padding: '40px 0', backgroundColor: '#fff' }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                Why HerTechStory?
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
                HerTechStory is dedicated to showcasing the achievements and stories of women in technology. We believe that by sharing these stories, we can inspire more women to pursue careers in tech and create a more inclusive industry.
                </Typography>
                <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#ff4081',
                            '&:hover': { backgroundColor: '#e91e63' },
                            padding: '10px 30px',
                            fontSize: '16px',
                        }}
                        href="#about"
                    >
                        Share Your Story With Us
                        </Button>
                </Box>
            </Container>

            {/* Events Section */}
            <Container id="events" maxWidth="lg" sx={{ marginTop: '40px', padding: '40px 0' }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                    Upcoming Events
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: '#666', maxWidth: '800px', margin: '0 auto 40px' }}>
                    Join us at our upcoming online events to connect with other women in tech, learn new skills, and share experiences.
                </Typography>
                <Grid container spacing={4}>
                    {/* Event 1: Tech Conference 2023 */}
                    <Grid item xs={12} md={6}>
                        <Card sx={{ backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                            {/* Event Image */}
                            <Box
                                component="img"
                                src="/path/to/tech-conference-image.jpg" // Replace with your image path
                                alt="Tech Conference 2023"
                                sx={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderTopLeftRadius: '10px',
                                    borderTopRightRadius: '10px',
                                }}
                            />
                            <CardContent>
                                {/* Event Title */}
                                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: '#333', marginTop: '10px' }}>
                                    Tech Conference 2023
                                </Typography>
                                {/* Event Description */}
                                <Typography variant="body1" sx={{ color: '#666', marginTop: '10px' }}>
                                    Join us for a day of inspiring talks, workshops, and networking opportunities focused on empowering women in tech.
                                </Typography>
                                {/* Event Time and Online Indicator */}
                                <Box sx={{ marginTop: '20px' }}>
                                    <Typography variant="body2" sx={{ color: '#666' }}>
                                        <strong>Time:</strong> 9:00 AM - 5:00 PM
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#666' }}>
                                        <strong>Location:</strong> Online Event
                                    </Typography>
                                </Box>
                                {/* Join Now Button */}
                                <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#ff4081',
                                            '&:hover': { backgroundColor: '#e91e63' },
                                            padding: '10px 30px',
                                            fontSize: '16px',
                                            borderRadius: '5px',
                                        }}
                                        href="#join"
                                    >
                                        Join Now
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Event 2: Mentorship Program */}
                    <Grid item xs={12} md={6}>
                        <Card sx={{ backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                            {/* Event Image */}
                            <Box
                                component="img"
                                src="/path/to/mentorship-program-image.jpg" // Replace with your image path
                                alt="Mentorship Program"
                                sx={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderTopLeftRadius: '10px',
                                    borderTopRightRadius: '10px',
                                }}
                            />
                            <CardContent>
                                {/* Event Title */}
                                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: '#333', marginTop: '10px' }}>
                                    Mentorship Program
                                </Typography>
                                {/* Event Description */}
                                <Typography variant="body1" sx={{ color: '#666', marginTop: '10px' }}>
                                    Connect with experienced women in tech and find your perfect mentor match. Build meaningful relationships and grow your career.
                                </Typography>
                                {/* Event Time and Online Indicator */}
                                <Box sx={{ marginTop: '20px' }}>
                                    <Typography variant="body2" sx={{ color: '#666' }}>
                                        <strong>Time:</strong> 3:00 PM - 6:00 PM
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#666' }}>
                                        <strong>Location:</strong> Online Event
                                    </Typography>
                                </Box>
                                {/* Join Now Button */}
                                <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#ff4081',
                                            '&:hover': { backgroundColor: '#e91e63' },
                                            padding: '10px 30px',
                                            fontSize: '16px',
                                            borderRadius: '5px',
                                        }}
                                        href="#join"
                                    >
                                        Join Now
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            {/* Contact Section */}
            <Container id="contact" maxWidth="lg" sx={{ marginTop: '40px', padding: '40px 0', backgroundColor: '#fff' }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                    Contact Us
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', color: '#666', maxWidth: '800px', margin: '0 auto 40px' }}>
                    Have questions or want to get involved? Reach out to us—we'd love to hear from you!
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {/* Contact Information */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                                Email Us
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#666' }}>
                                <strong>Email:</strong> info@hertechstory.com
                            </Typography>
                        </Box>
                    </Grid>
                    {/* Optional: Phone Number */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                                Call Us
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#666' }}>
                                <strong>Phone:</strong> +1 (123) 456-7890
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                {/* Optional: Contact Form */}
                <Box sx={{ maxWidth: '600px', margin: '40px auto 0', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                        Send Us a Message
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Your Name"
                                variant="outlined"
                                sx={{ backgroundColor: '#fff' }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Your Email"
                                variant="outlined"
                                sx={{ backgroundColor: '#fff' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Your Message"
                                variant="outlined"
                                multiline
                                rows={4}
                                sx={{ backgroundColor: '#fff' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#ff4081',
                                        '&:hover': { backgroundColor: '#e91e63' },
                                        padding: '10px 30px',
                                        fontSize: '16px',
                                        borderRadius: '5px',
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            {/* Footer */}
            <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Left Section: Platform Name and Description */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                                HerTechStory {/* Updated platform name */}
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: '10px' }}>
                                Empowering women in technology.
                            </Typography>
                        </Grid>

                        {/* Right Section: Social Media Handles */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                Follow Us
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '15px' }}>
                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/yourpage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#fff', textDecoration: 'none' }}
                                >
                                    <FacebookIcon sx={{ fontSize: '30px' }} />
                                </a>

                                {/* Twitter */}
                                <a
                                    href="https://www.twitter.com/yourhandle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#fff', textDecoration: 'none' }}
                                >
                                    <TwitterIcon sx={{ fontSize: '30px' }} />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/yourhandle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#fff', textDecoration: 'none' }}
                                >
                                    <InstagramIcon sx={{ fontSize: '30px' }} />
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/yourpage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#fff', textDecoration: 'none' }}
                                >
                                    <LinkedInIcon sx={{ fontSize: '30px' }} />
                                </a>
                            </Box>
                            <Typography variant="body1" sx={{ marginTop: '20px' }}>
                                © 2023 HerTechStory. All rights reserved. {/* Updated platform name */}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;