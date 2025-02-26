import React, { useState } from 'react';
import { submitStory } from '../services/api';

const SubmitStory = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '', // This should be the logged-in user's ID
        category: 'Entrepreneurship',
        mediaType: 'text',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await submitStory(formData);
            alert('Story submitted successfully!');
            console.log(response);
        } catch (error) {
            alert('Error submitting story');
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Submit Your Story</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Your story..."
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    required
                />
                <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                    <option value="Entrepreneurship">Entrepreneurship</option>
                    <option value="Education">Education</option>
                    <option value="Overcoming Barriers">Overcoming Barriers</option>
                    <option value="Innovation">Innovation</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SubmitStory;