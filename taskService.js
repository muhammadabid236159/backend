// ==========================================
// taskService.js - Database / File Service Module
// ==========================================
const fs = require('fs/promises');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'tasks.json');

// Helper function: Agar tasks.json na ho toh empty file bana de
async function ensureFileExists() {
    try {
        await fs.access(FILE_PATH);
    } catch {
        // Agar file nahi mili toh empty array [] likh do
        await fs.writeFile(FILE_PATH, JSON.stringify([], null, 2));
    }
}

// 1. Saare tasks read karna
async function getAllTasks() {
    await ensureFileExists();
    const data = await fs.readFile(FILE_PATH, 'utf-8');
    return JSON.parse(data); // String ko wapis JavaScript Array/Object banata hai
}

// 2. Naya task add karna
async function addTask(title) {
    if (!title) {
        throw new Error("Task ka title hona zaroori hai!");
    }

    const tasks = await getAllTasks();

    // Naya Task Object
    const newTask = {
        id: Date.now(), // Har task ko unique ID dene ke liye current time use kiya
        title: title,
        completed: false,
        createdAt: new Date().toLocaleDateString()
    };

    tasks.push(newTask);

    // Wapis file mein save karein
    await fs.writeFile(FILE_PATH, JSON.stringify(tasks, null, 2));
    return newTask;
}

// 3. ID se task dhoondna
async function getTaskById(id) {
    const tasks = await getAllTasks();
    const task = tasks.find(t => t.id === id);

    if (!task) {
        throw new Error(`Task ID ${id} database mein nahi mila!`);
    }

    return task;
}

// 4. Task delete karna
async function deleteTask(id) {
    const tasks = await getAllTasks();
    const filteredTasks = tasks.filter(t => t.id !== id);

    if (tasks.length === filteredTasks.length) {
        throw new Error(`Delete karne ke liye Task ID ${id} nahi mila!`);
    }

    await fs.writeFile(FILE_PATH, JSON.stringify(filteredTasks, null, 2));
    return true;
}

// Baqi files mein use karne ke liye export karein
module.exports = {
    getAllTasks,
    addTask,
    getTaskById,
    deleteTask
};
