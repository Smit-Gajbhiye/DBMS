# HealthBloom – AI Health Guide

## Overview
HealthBloom is an AI-powered health awareness assistant designed to help users better understand common health concerns and make informed wellness decisions. The app provides educational health information, symptom-awareness guidance, preventive care suggestions, and lifestyle recommendations in a simple and accessible way.

## Problem Statement
Many people struggle to understand general health concerns and find it difficult to access clear, reliable, and beginner-friendly health awareness information. Health questions often lead to confusion, misinformation, or unnecessary worry. HealthBloom aims to make health education more approachable and supportive.

## Solution
HealthBloom uses AI to generate structured educational responses to health-related questions while promoting safe and responsible health awareness. The app provides helpful guidance and reminds users that it is not a replacement for professional medical advice, diagnosis, or treatment.

## Features
- AI-powered health awareness assistant
- Symptom-based queries
- Preventive care guidance
- Lifestyle and wellness suggestions
- Markdown-formatted AI responses
- Medical disclaimer
- Responsive modern UI
- Loading states and error handling

## Tech Stack
- React.js
- Vite
- Tailwind CSS
- Google Gemini API
- JavaScript
- Lucide React

## How It Works
1. User enters a health question or symptom-related query.
2. The application sends the request to the AI service.
3. The AI generates an educational response in a structured format.
4. The response is displayed to the user with helpful guidance and disclaimers.

## Installation and Setup

```bash
git clone <repository-url>

cd PromptWars_2026

npm install
```

Create a `.env` file in the project root:

```env
VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run the app locally:

```bash
npm run dev
```

## Environment Variables
The Gemini API key should be stored securely using environment variables. The application reads the key from `VITE_GEMINI_API_KEY` in the `.env` file during development.

## Project Structure

```text
src/
├── components/
├── services/
├── App.jsx
└── main.jsx
```

## Medical Disclaimer
This application provides AI-generated health information for educational purposes only. It is NOT a substitute for professional medical advice, diagnosis, or treatment.

## Future Enhancements
- Voice-based health queries
- Multi-language support
- Health tracking features
- More personalized wellness recommendations

## License
This project is licensed under the MIT License.
