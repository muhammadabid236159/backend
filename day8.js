// ==========================================
// DAY 8: Introduction to Express.js
// ==========================================

// 1. Express package ko import karein (NPM se install hua hai, is liye './' nahi lagaya)
const express = require('express');

// 2. Express ki app banayein (Ye hamara server hai)
const app = express();
const PORT = 3000;

// ------------------------------------------
// 3. Routes (Raste) Define Karna
// ------------------------------------------

// Route 1: Home Page (GET /)
app.get('/', (req, res) => {
    // res.send() khud samajh jata hai ke ye HTML hai aur status 200 bhej deta hai
    res.send(`
        <h1 style="color: green;">Welcome to Express.js Server! 🚀</h1>
        <p>Day 8: Express ke sath backend banana bohot aasan hai.</p>
        <p>Users dekhne ke liye click karein: <a href="/api/users">/api/users</a></p>
    `);
});

// Route 2: Users API (GET /api/users)
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: "Muhammad Abid", role: "Backend Developer" },
        { id: 2, name: "Ali Khan", role: "Frontend Developer" },
        { id: 3, name: "Sara Ahmed", role: "UI/UX Designer" }
    ];

    // res.json() khud JSON.stringify karta hai aur Content-Type: application/json set karta hai!
    res.json({
        success: true,
        count: users.length,
        data: users
    });
});

// Route 3: About / Info Route (GET /api/info)
app.get('/api/info', (req, res) => {
    res.json({
        app: "Backend Learning API",
        day: 8,
        framework: "Express.js"
    });
});

// 4. 404 Route (Agar upar mein se koi route match na ho)
// Ye hamesha sab routes ke AAKHIR mein likha jata hai!
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Ye route maujood nahi hai (404 Not Found)"
    });
});

// ------------------------------------------
// 5. Server Start Karein
// ------------------------------------------
app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`🚀 Express Server Live: http://localhost:${PORT}`);
    console.log(`👉 Users API: http://localhost:${PORT}/api/users`);
    console.log(`=========================================`);
});
