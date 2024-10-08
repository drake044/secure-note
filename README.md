# SecureNote

**SecureNote** is a privacy-focused, encrypted note-taking application designed to ensure that your notes remain confidential and secure. With end-to-end encryption, users can write, store, and sync their notes across devices, all while keeping their data protected from unauthorized access.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **End-to-End Encryption**: All notes are encrypted on the client side, ensuring only you can read them.
- **Cross-Device Sync**: Access your notes from any device seamlessly.
- **User-Friendly Interface**: An intuitive interface for easy note-taking and organization.
- **Secure Authentication**: User authentication is handled securely using JWT.
- **Offline Access**: Write and edit notes without an internet connection.
- **Dark Mode**: A modern dark mode option for better usability in low-light environments.

## Technologies Used
- **Frontend**: [Next.js](https://nextjs.org/) (with App Router)
- **Backend**: Node.js, Express
- **Database**: MongoDB (or your choice of database)
- **Encryption**: CryptoJS or Web Crypto API
- **Styling**: Tailwind CSS (for a modern and responsive design)

## Installation
To set up the SecureNote project locally, follow these steps:

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (if you choose to use it for the backend)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/secure-note.git
   cd secure-note
Install Frontend Dependencies:
bash
Copy code
cd frontend
npm install
Install Backend Dependencies:
bash
Copy code
cd ../backend
npm install
Set Up Environment Variables: Create a .env file in the backend directory and add the following variables:
env
Copy code
PORT=5002
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Run the Backend Server:
bash
Copy code
node server.js
Run the Frontend Development Server: Open a new terminal, navigate to the frontend directory, and run:
bash
Copy code
npm run dev
Open the Application: Navigate to http://localhost:3000 in your browser to access SecureNote.
Usage

Create an Account: Sign up to start using SecureNote.
Log In: Use your credentials to log in and access your notes.
Create, Edit, and Delete Notes: Use the intuitive interface to manage your notes.
Sync Across Devices: Your notes will be available on any device you log into.
Contributing

We welcome contributions to SecureNote! Please refer to the CONTRIBUTING.md file for guidelines on how to contribute.

License

This project is licensed under the MIT License - see the LICENSE file for details.

Contact

For questions or suggestions, please reach out:

Email: aayushguptas084@gmail.com
GitHub: drake044
