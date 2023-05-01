# Vue ChatGPT App with Firebase Authentication

This is a simple chat application built using Vue.js and OpenAI's GPT-4 model. It demonstrates how to create a chat interface to interact with the ChatGPT API and how to add user authentication using Firebase.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [License](#license)

## Features

- Chat interface to interact with OpenAI's GPT-4 model
- User authentication using Firebase
- Route protection for authenticated users
- Responsive design using Bootstrap

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x.x or higher)
- [npm](https://www.npmjs.com/) (version 7.x.x or higher)
- [Vue CLI](https://cli.vuejs.org/) (version 4.x.x or higher)
- [Firebase CLI](https://firebase.google.com/docs/cli) (version 9.x.x or higher)
- A Firebase project with an enabled authentication provider (e.g., Google, Facebook, or email/password)

## Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/vue-chatgpt-firebase.git
```

2. Install dependencies:
```
cd vue-chatgpt-firebase
npm install
```

## Configuration

1. Create a `.env.local` file in the project root directory and add your OpenAI API key:
```
VUE_APP_OPENAI_API_KEY=your_openai_api_key_here
```

2. Configure your Firebase project settings in `src/firebaseConfig.js`:
```javascript
const firebaseConfig = {
  apiKey: "your_api_key_here",
  authDomain: "your_auth_domain_here",
  projectId: "your_project_id_here",
  storageBucket: "your_storage_bucket_here",
  messagingSenderId: "your_messaging_sender_id_here",
  appId: "your_app_id_here",
};
```
### Running the App
To start the development server, run the following command:
```
npm run serve
```
Open your browser and visit http://localhost:8080/ to view the app.

## Deployment
Follow the instructions in the Deployment section to deploy your app to Firebase Hosting.

## License
This project is licensed under the MIT License. See the LICENSE file for details.