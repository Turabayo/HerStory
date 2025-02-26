// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Backend URL

// Register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Login a user
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Submit a story
export const submitStory = async (storyData) => {
    try {
        const response = await axios.post(`${API_URL}/stories/submit`, storyData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Get all stories
export const getAllStories = async () => {
    try {
        const response = await axios.get(`${API_URL}/stories/stories`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};