# React-Js-Ai-Chatbot

## Overview

This project is a modern AI-powered chatbot built with React.js, Vite, and Tailwind CSS. It leverages the Google Gemini API (via `@google/genai`) to provide conversational AI capabilities. The chatbot features a clean, responsive UI and supports real-time interaction with the AI model.

## Features

- **Conversational AI:** Interact with the Gemini AI model for dynamic Q&A.
- **Modern UI:** Built with React.js and styled using Tailwind CSS for a sleek, responsive design.
- **API Integration:** Uses the Google Gemini API for generating responses.
- **Loading Indicators:** Shows animated feedback while waiting for AI responses.
- **User/Model Message Separation:** Clearly distinguishes between user and AI messages.

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm or yarn

### Installation

1. Clone the repository:
	```bash
	git clone <repo-url>
	cd <project-folder>
	```
2. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```
3. Set up your Google Gemini API key:
	- Create a `.env` file in the root directory.
	- Add your API key as follows:
	  ```env
	  VITE_GEMINI_API_KEY=your_api_key_here
	  ```
	- **Note:** The API key used for development has been deleted for security. You must add your own API key to use the AI features.

4. Start the development server:
	```bash
	npm run dev
	# or
	yarn dev
	```

5. Open [http://localhost:5173](http://localhost:5173) in your browser to use the chatbot.

## Project Structure

- `src/App.jsx` — Main chatbot logic and UI
- `src/main.jsx` — Entry point
- `src/index.css` — Tailwind CSS and custom styles
- `public/` — Static assets
- `vite.config.js` — Vite configuration

## Usage

Type your message in the input box and press **Send**. The chatbot will display your message and respond using the Gemini AI model. All conversations are shown in a chat-style interface.

## Customization

- You can further style the chatbot by editing `src/index.css` or modifying the React components in `src/App.jsx`.
- To use a different AI model, update the model name in the API call inside `App.jsx`.

## Security Note

**The API key previously used for this project has been deleted.**

To use the AI features, you must add your own Google Gemini API key in a `.env` file as described above. **Never commit your API key to version control.**

## Author

Developed by **Huzaif Tarazi**.

## License

This project is for educational and demonstration purposes.