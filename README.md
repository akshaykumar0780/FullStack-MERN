🖥️ Frontend (React.js) Setup

1️⃣ Navigate to the client folder:
cd Client
2️⃣ Install dependencies:
npm install
3️⃣ Start the React app:
npm run dev
🌐 Now, open http://localhost:5173 to view the app.

🌍 Backend (Node.js + Express + MongoDB) Setup

1️⃣ Navigate to the server folder:
cd Server
2️⃣ Create a .env file and add the following:
PORT=8000
LOCAL_DB_URL=mongodb://127.0.0.1:27017/crudapp
3️⃣ Install dependencies:
npm install
4️⃣ Start the backend server:
modify package.json file change scripts:  "start": "nodemon server.js"
npm run start
🚀 Backend runs on http://localhost:8000
