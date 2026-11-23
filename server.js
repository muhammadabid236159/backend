// ==========================================
// server.js - Real Task Manager Web API Server
// (Combining Day 1-4 with Day 5 HTTP Server)
// ==========================================

const http = require('http');
// Hamara banaya hua custom module jo tasks.json se data lata hai
const taskService = require('./taskService');

const PORT = 5000;

const server = http.createServer(async (req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`[Request]: ${method} ${url}`);

    try {
        // Route 1: Home Page (HTML)
        if (url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <h1 style="color: blue;">Task Manager API Server</h1>
                <p>Tasks dekhne ke liye is link par jayein: 
                   <a href="/api/tasks"><b>/api/tasks</b></a>
                </p>
            `);

        // Route 2: Get All Tasks API (JSON Data)
        } else if (url === '/api/tasks' && method === 'GET') {
            // taskService se tasks mangwaye (async/await)
            const tasks = await taskService.getAllTasks();

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: true,
                total: tasks.length,
                data: tasks
            }));

        // Route 3: Not Found Route (404)
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: false,
                message: "Route nahi mila (404 Not Found)"
            }));
        }

    } catch (error) {
        // Agar database/file parhte waqt masla aaye
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            success: false,
            error: error.message
        }));
    }
});

server.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`🚀 Task Manager API Live: http://localhost:${PORT}`);
    console.log(`👉 Tasks dekhne ke liye: http://localhost:${PORT}/api/tasks`);
    console.log(`=========================================`);
});
