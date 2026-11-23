// ==========================================
// DAY 5: Node.js Built-in HTTP Web Server
// ==========================================

const http = require('http');

const PORT = 3000;

// 1. Server Create Karein
// req = Client ki Request (kya manga gaya?)
// res = Hamara Response (kya jawab bhejna hai?)
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`[Request Aayi]: Method = ${method} | URL = ${url}`);

    // 2. Routing (Check karein user kis page par aaya hai)
    if (url === '/') {
        // Plain text ya HTML response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Welcome to Node.js Backend Server!</h1><p>Day 5 HTTP Module seekh rahe hain.</p>");

    } else if (url === '/api/users') {
        // Backend API hamesha JSON data return karti hai
        const users = [
            { id: 1, name: "Muhammad Abid", role: "Backend Developer" },
            { id: 2, name: "Ali Khan", role: "Frontend Developer" }
        ];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users)); // Array/Object ko string bana kar bhejna parta hai

    } else {
        // Agar koi aisa page manga jo exist nahi karta (404)
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h2>404 - Page Not Found!</h2><p>Ye URL maujood nahi hai.</p>");
    }
});

// 3. Server ko listen mode par lagayein
server.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`🚀 Server chal gaya hai: http://localhost:${PORT}`);
    console.log(`=========================================`);
});
