# Base Backend - Nest.js - Google OAuth

## Introduction

Base Backend - Google OAuth is a straightforward Nest.js application designed to serve as a starting point for backend development. It integrates Google OAuth for user authentication and MongoDB for data management, simplifying the setup process for new projects.

## Features

- **Google OAuth**: Quick and secure user sign-in using Google accounts.
- **Session Management**: Efficient session tracking with cookie usage.
- **Event-Driven User Management**: Simplifies post-login user data processing.
- **MongoDB Integration**: Provides reliable cloud-based storage for user data.


## Technologies

- [Nest.js](https://nestjs.com/)
- [Passport.js](https://www.passportjs.org/)
- [MongoDB Cloud](https://www.mongodb.com/cloud)
- [EventEmitter2](https://github.com/EventEmitter2/EventEmitter2)
- [Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2)

## Setup and Installation

1. **Clone the Repository**

```bash
git clone https://github.com/shmuelyos/base-backend-with-google-oauth
cd base-backend-google-oauth
```
2. **Install PNPM Globally (If Not Already Installed)**
   
PNPM is used as the package manager for this project. If you don't have PNPM installed, you can install it globally using the following command:

```bash
npm install -g pnpm      
```

3. **Install Dependencies**


Use PNPM to install the necessary dependencies:

```bash
pnpm install
```

4. **Environment Configuration (.env)**

Create a .env file in the root directory with the following structure and fill in the necessary environment variables:

```bash
GOOGLE_CLIENT_ID=****  
GOOGLE_CLIENT_SECRET=****  
BASE_URL=localhost  
PORT=5000  
SESSION_SECRET=****  
DB_OWNER=****  
DB_PASSWORD=****  
DB_NAME=****  
MONGO_URL=mongodb+srv://****:****@cluster****.mongodb.net/****?retryWrites=true&w=majority  
FRONTEND_URL=http://localhost:3000  
NODE_ENV=development
```
⚠ Replace the **** with your actual Google client ID, client secret, session secret, database credentials, and other sensitive information.


5. **Run the Application**

Start the application in development mode using PNPM:
```bash
pnpm start:dev
```
This command runs the application in development mode, watching for any changes and automatically restarting the server.

## Usage
After starting the application, users can authenticate via Google OAuth by navigating to the /google endpoint. The application will handle session creation, user data retrieval, or user creation in the database.

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit/).

## Contributing
Contributions to the Base Backend - Google OAuth project are welcome! Please refer to the contributing guidelines for detailed instructions.

## Support and Contact
If you encounter any issues or require assistance, please contact shmuelyos@gmail.com.

Happy Coding!


