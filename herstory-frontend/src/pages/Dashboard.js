import React, { useState } from 'react';
import {
    Box, Typography, Button, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText,
    TextField, Select, MenuItem, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
    Person as PersonIcon,
    Article as ArticleIcon,
    Explore as ExploreIcon,
    Analytics as AnalyticsIcon,
    Notifications as NotificationsIcon,
    ExitToApp as ExitToAppIcon,
    ThumbUp as ThumbUpIcon,
    Comment as CommentIcon,
    Share as ShareIcon,
} from '@mui/icons-material';

const Dashboard = () => {
    const navigate = useNavigate();
    const [selectedSection, setSelectedSection] = useState('profile'); // Default section
    const [storyForm, setStoryForm] = useState({
        title: '',
        content: '',
        category: 'Entrepreneurship',
        mediaType: 'text',
    });
    const [stories, setStories] = useState([
        { id: 1, title: 'My Journey in Tech', category: 'Entrepreneurship', views: 120, likes: 30, comments: [] },
        { id: 2, title: 'Overcoming Barriers', category: 'Education', views: 80, likes: 20, comments: [] },
    ]);
    const [openCommentDialog, setOpenCommentDialog] = useState(false);
    const [selectedStoryId, setSelectedStoryId] = useState(null);
    const [newComment, setNewComment] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    // Dummy user data
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user',
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    // Handle story form submission
    const handleStorySubmit = (e) => {
        e.preventDefault();
        const newStory = {
            id: stories.length + 1,
            title: storyForm.title,
            category: storyForm.category,
            views: 0,
            likes: 0,
            comments: [],
        };
        setStories([...stories, newStory]);
        setStoryForm({ title: '', content: '', category: 'Entrepreneurship', mediaType: 'text' });
        alert('Story submitted successfully!');
    };

    // Handle like button click
    const handleLike = (storyId) => {
        setStories((prevStories) =>
            prevStories.map((story) =>
                story.id === storyId ? { ...story, likes: story.likes + 1 } : story
            )
        );
    };

    // Handle comment button click
    const handleCommentClick = (storyId) => {
        setSelectedStoryId(storyId);
        setOpenCommentDialog(true);
    };

    // Handle comment submission
    const handleCommentSubmit = () => {
        setStories((prevStories) =>
            prevStories.map((story) =>
                story.id === selectedStoryId
                    ? { ...story, comments: [...story.comments, newComment] }
                    : story
            )
        );
        setNewComment('');
        setOpenCommentDialog(false);
        setSnackbarMessage('Comment added successfully!');
        setSnackbarOpen(true);
    };

    // Handle share button click
    const handleShare = (storyId) => {
        const storyLink = `${window.location.origin}/story/${storyId}`;
        navigator.clipboard.writeText(storyLink)
            .then(() => {
                setSnackbarMessage('Link copied to clipboard!');
                setSnackbarOpen(true);
            })
            .catch((error) => {
                console.error('Failed to copy link:', error);
                setSnackbarMessage('Failed to copy link. Please try again.');
                setSnackbarOpen(true);
            });
    };

    // Close snackbar
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            {/* Sidebar */}
            <Box
                sx={{
                    width: '250px',
                    backgroundColor: '#333',
                    color: '#fff',
                    padding: '20px',
                    minHeight: '100vh',
                }}
            >
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                    HerTechStory
                </Typography>
                <List>
                    <ListItem button onClick={() => setSelectedSection('profile')}>
                        <ListItemIcon>
                            <PersonIcon sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button onClick={() => setSelectedSection('stories')}>
                        <ListItemIcon>
                            <ArticleIcon sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="Stories" />
                    </ListItem>
                    <ListItem button onClick={() => setSelectedSection('explore')}>
                        <ListItemIcon>
                            <ExploreIcon sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="Explore" />
                    </ListItem>
                    <ListItem button onClick={() => setSelectedSection('metrics')}>
                        <ListItemIcon>
                            <AnalyticsIcon sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="Metrics" />
                    </ListItem>
                    <ListItem button onClick={() => setSelectedSection('notifications')}>
                        <ListItemIcon>
                            <NotificationsIcon sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="Notifications" />
                    </ListItem>
                </List>
                <Button
                    variant="contained"
                    startIcon={<ExitToAppIcon />}
                    sx={{
                        marginTop: '20px',
                        backgroundColor: '#ff4081',
                        '&:hover': { backgroundColor: '#e91e63' },
                        width: '100%',
                    }}
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Box>

            {/* Main Content */}
            <Box sx={{ flexGrow: 1, padding: '20px' }}>
                {/* Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
                        Welcome, {user.name}!
                    </Typography>
                </Box>

                {/* Profile Section */}
                {selectedSection === 'profile' && (
                    <Card sx={{ marginBottom: '20px' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                Profile
                            </Typography>
                            <Typography variant="body1">
                                <strong>Name:</strong> {user.name}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Email:</strong> {user.email}
                            </Typography>
                            <Typography variant="body1">
                                <strong>Role:</strong> {user.role}
                            </Typography>
                        </CardContent>
                    </Card>
                )}

                {/* Stories Section */}
                {selectedSection === 'stories' && (
                    <Box>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                            Your Stories
                        </Typography>
                        <Grid container spacing={4}>
                            {stories.map((story) => (
                                <Grid item xs={12} md={6} key={story.id}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                                                {story.title}
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: '#666', marginTop: '10px' }}>
                                                <strong>Category:</strong> {story.category}
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: '#666', marginTop: '10px' }}>
                                                <strong>Views:</strong> {story.views} | <strong>Likes:</strong> {story.likes}
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                                <IconButton onClick={() => handleLike(story.id)}>
                                                    <ThumbUpIcon />
                                                </IconButton>
                                                <IconButton onClick={() => handleCommentClick(story.id)}>
                                                    <CommentIcon />
                                                </IconButton>
                                                <IconButton onClick={() => handleShare(story.id)}>
                                                    <ShareIcon />
                                                </IconButton>
                                            </Box>
                                            {story.comments.length > 0 && (
                                                <Box sx={{ marginTop: '10px' }}>
                                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                        Comments:
                                                    </Typography>
                                                    {story.comments.map((comment, index) => (
                                                        <Typography key={index} variant="body2" sx={{ color: '#666', marginTop: '5px' }}>
                                                            {comment}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            )}
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                        {/* Story Submission Form */}
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', marginTop: '40px', marginBottom: '20px' }}>
                            Submit a New Story
                        </Typography>
                        <Box component="form" onSubmit={handleStorySubmit}>
                            <TextField
                                fullWidth
                                label="Title"
                                value={storyForm.title}
                                onChange={(e) => setStoryForm({ ...storyForm, title: e.target.value })}
                                sx={{ marginBottom: '20px' }}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Content"
                                multiline
                                rows={4}
                                value={storyForm.content}
                                onChange={(e) => setStoryForm({ ...storyForm, content: e.target.value })}
                                sx={{ marginBottom: '20px' }}
                                required
                            />
                            <Select
                                fullWidth
                                value={storyForm.category}
                                onChange={(e) => setStoryForm({ ...storyForm, category: e.target.value })}
                                sx={{ marginBottom: '20px' }}
                                required
                            >
                                <MenuItem value="Entrepreneurship">Entrepreneurship</MenuItem>
                                <MenuItem value="Education">Education</MenuItem>
                                <MenuItem value="Overcoming Barriers">Overcoming Barriers</MenuItem>
                                <MenuItem value="Innovation">Innovation</MenuItem>
                            </Select>
                            <Button type="submit" variant="contained" sx={{ backgroundColor: '#ff4081', '&:hover': { backgroundColor: '#e91e63' } }}>
                                Submit Story
                            </Button>
                        </Box>
                    </Box>
                )}

                {/* Comment Dialog */}
                <Dialog open={openCommentDialog} onClose={() => setOpenCommentDialog(false)}>
                    <DialogTitle>Add a Comment</DialogTitle>
                    <DialogContent>
                        <TextField
                            fullWidth
                            label="Your Comment"
                            multiline
                            rows={4}
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            sx={{ marginTop: '10px' }}
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenCommentDialog(false)}>Cancel</Button>
                        <Button onClick={handleCommentSubmit} variant="contained" sx={{ backgroundColor: '#ff4081', '&:hover': { backgroundColor: '#e91e63' } }}>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Snackbar for Notifications */}
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    onClose={handleSnackbarClose}
                    message={snackbarMessage}
                />
            </Box>
        </Box>
    );
};

export default Dashboard;