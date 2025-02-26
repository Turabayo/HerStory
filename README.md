# **HerTechStory**  

HerTechStory is a **web + AI-powered** platform where women in tech share their journeys, challenges, and experiences through text, audio, and video to inspire future generations.  

## **Tech Stack**  
### **Frontend (React.js)**  
- React.js, React Router, TailwindCSS  

### **Backend (Node.js & MongoDB)**  
- Express.js, MongoDB (Mongoose), JWT (Auth)  

## **Installation**  
1. **Clone Repo**  
   ```bash
   git clone https://github.com/yourusername/HerStory.git && cd HerStory
   ```
2. **Install Dependencies**  
   ```bash
   cd frontend && npm install && npm start  # Frontend  
   cd backend && npm install && npm start   # Backend  
   ```
3. **Set Up `.env` (Backend)**  
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

## **Deployment**  
- **Frontend:** Vercel/Netlify → `npm run build && vercel deploy`  
- **Backend:** Render/Heroku → Push to GitHub & deploy  

## **Contributing**  
Fork, create a branch, make changes, and submit a PR.  
