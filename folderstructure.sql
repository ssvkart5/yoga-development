yoga-app/
├── client/                  # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # UI components like LoginForm, PoseCard
│   │   ├── pages/           # Page views (Login, Home, Schedule)
│   │   ├── services/        # API calls (auth, poses, schedule)
│   │   └── App.js
│   └── package.json
├── server/                  # Node.js backend
│   ├── controllers/         # Logic for each API route
│   ├── models/              # Mongoose schemas for User, Pose, Schedule
│   ├── routes/              # API routes (auth.js, poses.js, schedule.js)
│   ├── middleware/          # Auth checks, error handling
│   └── server.js            # Express app entry point
├── .env
├── package.json
└── README.md
